(function renderFooter(){
  var slot = document.querySelector('[data-footer]');
  if (!slot) return;

  var lang = (document.documentElement.lang || '').toLowerCase();
  var isZh = lang.startsWith('zh');

  var footerEn = [
    '<footer class="site-footer">',
    '  © <span class="rm-year"></span> RiskMeter. Educational use only. · <a href="/en/support/">Support & Education</a> · <a href="/en/sitemap/">Sitemap</a>',
    '</footer>'
  ].join('\n');

  var footerZh = [
    '<footer class="site-footer">',
    '  © <span class="rm-year"></span> RiskMeter. 仅教育用途。· <a href="/zh/support/">支持与使用说明</a> · <a href="/zh/sitemap/">站点地图</a>',
    '</footer>'
  ].join('\n');

  slot.innerHTML = isZh ? footerZh : footerEn;

  var y = slot.querySelector('.rm-year');
  if (y) y.textContent = new Date().getFullYear();
})();
