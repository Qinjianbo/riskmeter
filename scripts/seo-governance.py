#!/usr/bin/env python3
"""CLI helper: scan HTML pages for rm_* keys, canonical/hreflang metadata, and sitemap coverage."""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from html.parser import HTMLParser
from xml.etree import ElementTree as ET

HOST = "https://riskmeter.app"
REQUIRED_HREFLANGS = ("en", "zh", "x-default")


class LinkParser(HTMLParser):
  def __init__(self):
    super().__init__()
    self.canonical: str | None = None
    self.hreflangs: dict[str, str] = {}

  def handle_starttag(self, tag, attrs):
    if tag != "link":
      return
    attr = {name.lower(): value for name, value in attrs if value is not None}
    rel = attr.get("rel", "")
    rel_tokens = {token.strip() for token in rel.lower().split()}
    href = attr.get("href")
    if not href:
      return
    href = href.strip()
    if "canonical" in rel_tokens and not self.canonical:
      self.canonical = href
    if "alternate" in rel_tokens and "hreflang" in attr:
      lang = attr["hreflang"].lower()
      self.hreflangs[lang] = href


def expected_canonical(path: pathlib.Path, root: pathlib.Path) -> str | None:
  rel = path.relative_to(root)
  parts = rel.parts
  if len(parts) == 1:
    return f"{HOST}/"
  lang = parts[0]
  if lang not in ("en", "zh"):
    return None
  slug = "/".join(parts[1:-1])
  suffix = f"{slug}/" if slug else ""
  return f"{HOST}/{lang}/{suffix}"


def detect_lang(path: pathlib.Path, root: pathlib.Path) -> str:
  rel = path.relative_to(root)
  parts = rel.parts
  if len(parts) == 1:
    return "root"
  first = parts[0]
  return first if first in ("en", "zh") else "other"


def gather_html(root: pathlib.Path, lang_filter: str) -> list[pathlib.Path]:
  candidates: list[pathlib.Path] = []
  if lang_filter in ("all", "en"):
    en_dir = root / "en"
    if en_dir.is_dir():
      candidates.extend(sorted(en_dir.rglob("index.html")))
  if lang_filter in ("all", "zh"):
    zh_dir = root / "zh"
    if zh_dir.is_dir():
      candidates.extend(sorted(zh_dir.rglob("index.html")))
  root_index = root / "index.html"
  if root_index.exists():
    candidates.append(root_index)
  unique = sorted(dict.fromkeys(candidates))
  return unique


def parse_sitemap(path: pathlib.Path) -> set[str]:
  if not path.exists():
    return set()
  try:
    tree = ET.parse(path)
  except ET.ParseError:
    return set()
  ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
  root = tree.getroot()
  urls = {
    elem.find("ns:loc", ns).text.strip()
    for elem in root.findall("ns:url", ns)
    if elem.find("ns:loc", ns) is not None and elem.find("ns:loc", ns).text
  }
  return urls


def analyze_file(path: pathlib.Path, root: pathlib.Path) -> dict:
  text = path.read_text(encoding="utf-8", errors="ignore")
  parser = LinkParser()
  parser.feed(text)
  rm_keys = sorted({match.group(0) for match in re.finditer(r"rm_[A-Za-z0-9_-]+", text)})
  has_storage = bool(re.search(r"localStorage", text))
  expected = expected_canonical(path, root)
  lang = detect_lang(path, root)
  issues: list[str] = []
  suggestions: list[str] = []
  if expected:
    if not parser.canonical:
      issues.append("missing canonical")
      suggestions.append(f'Add `<link rel="canonical" href="{expected}" />`')
    elif parser.canonical != expected:
      issues.append(f'canonical mismatch (found {parser.canonical})')
      suggestions.append(f'Replace canonical with `{expected}`')
    elif not parser.canonical.startswith(HOST):
      issues.append("canonical points outside riskmeter.app")
      suggestions.append(f'Use `{expected}` under {HOST}')
  missing_hrels = [lang_code for lang_code in REQUIRED_HREFLANGS if lang_code not in parser.hreflangs]
  for lang_code in missing_hrels:
    issues.append(f"missing hreflang {lang_code}")
    target = expected if lang_code == "x-default" and expected else f"{HOST}/"
    suggestions.append(f'Add `<link rel="alternate" hreflang="{lang_code}" href="{target}" />`')
  x_default = parser.hreflangs.get("x-default")
  if x_default and not x_default.startswith(HOST):
    issues.append("x-default href points outside riskmeter.app")
    suggestions.append('Update the x-default href to use https://riskmeter.app/...')
  if has_storage and not rm_keys:
    issues.append("localStorage referenced but no rm_* keys found")
    suggestions.append("Use rm_* prefixes when reading/writing localStorage")
  return {
    "file": str(path.relative_to(root)),
    "lang": lang,
    "canonical": parser.canonical,
    "expected_canonical": expected,
    "hreflang": parser.hreflangs,
    "rm_keys": rm_keys,
    "issues": issues,
    "suggestions": suggestions,
  }


def main() -> int:
  parser = argparse.ArgumentParser(description="RiskMeter SEO & localStorage inspection")
  parser.add_argument("--lang", choices=("en", "zh", "all"), default="all", help="Which language tree to scan")
  args = parser.parse_args()
  root = pathlib.Path(__file__).resolve().parents[1]
  html_files = gather_html(root, args.lang)
  if not html_files:
    print("No HTML files found for the selected language.", file=sys.stderr)
    return 1
  sitemap_urls = parse_sitemap(root / "sitemap.xml")
  report = [analyze_file(path, root) for path in html_files]
  expected_urls = {entry["expected_canonical"] for entry in report if entry["expected_canonical"]}
  missing_in_sitemap = sorted(expected_urls - sitemap_urls)
  issue_count = sum(len(entry["issues"]) for entry in report)
  output = {
    "files_scanned": len(report),
    "issue_count": issue_count,
    "missing_in_sitemap": missing_in_sitemap,
    "has_sitemap": bool(sitemap_urls),
    "files": report,
  }
  print(json.dumps(output, indent=2, ensure_ascii=False))
  if missing_in_sitemap:
    print("\nSitemap missing the following canonical URLs:")
    for url in missing_in_sitemap:
      print("  -", url)
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
