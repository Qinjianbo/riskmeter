(() => {
  const STORAGE_KEY = 'rm_drawdown_state';
  const SCENARIOS_KEY = 'rm_drawdown_scenarios';
  const SIGNAL_KEY = 'rm_signal_log';
  const NOTE_LIMIT = 40;

  const clampNonNegative = (value) => Math.max(0, Number(value) || 0);

  window.createDrawdownTestApp = function createDrawdownTestApp(config) {
    return {
      NOTE_LIMIT,
      drawdown: config.defaultState.drawdown,
      portfolio: config.defaultState.portfolio,
      note: '',
      scenarios: [],
      capTotal: config.defaultCapacity.total,
      capPosition: config.defaultCapacity.position,
      capMaxDd: config.defaultCapacity.maxDd,
      capCurrentDd: config.defaultCapacity.currentDd,
      capRemainingText: '—',
      capWeightText: '—',
      capPosDropText: '—',
      feedbackHint: config.text.feedbackLocalOnly,
      toastTimer: null,
      toastEl: null,

      get currentBand() {
        return this.getBand(this.drawdown);
      },

      get recovery() {
        return this.drawdown >= 99 ? 0 : ((1 / (1 - this.drawdown / 100)) - 1) * 100;
      },

      get lossText() {
        if (this.portfolio <= 0) return '—';
        const loss = this.portfolio * (this.drawdown / 100);
        return `-${this.formatCurrency(loss)}`;
      },

      get recoveryText() {
        return `${this.recovery.toFixed(1)}%`;
      },

      get summaryText() {
        const loss = this.portfolio > 0 ? `-${this.formatCurrency(this.portfolio * (this.drawdown / 100))}` : '—';
        const portfolio = this.portfolio > 0 ? this.formatCurrency(this.portfolio) : '—';
        return config.text.summary(this.currentBand.label, this.drawdown, loss, this.recovery.toFixed(1), portfolio);
      },

      init() {
        this.installToast();
        this.bumpSignal('views');
        this.loadState();
        this.scenarios = this.loadScenarios();
        this.update();
        this.updateCapacity();
      },

      setLang(lang) {
        localStorage.setItem('rm_lang', lang);
      },

      formatCurrency(value) {
        return new Intl.NumberFormat(config.locale, {
          style: 'currency',
          currency: config.currency,
          maximumFractionDigits: 0
        }).format(value);
      },

      formatPercent(value) {
        return `${value.toFixed(1)}%`;
      },

      getBand(drawdown) {
        return config.bands.find((item) => drawdown <= item.max) || config.bands[config.bands.length - 1];
      },

      update() {
        this.drawdown = clampNonNegative(this.drawdown);
        this.portfolio = clampNonNegative(this.portfolio);
        this.saveState();
      },

      updateCapacity() {
        this.capTotal = clampNonNegative(this.capTotal);
        this.capPosition = clampNonNegative(this.capPosition);
        this.capMaxDd = clampNonNegative(this.capMaxDd);
        this.capCurrentDd = clampNonNegative(this.capCurrentDd);

        const remaining = Math.max(0, this.capMaxDd - this.capCurrentDd);
        this.capRemainingText = this.capTotal > 0
          ? `${this.formatPercent(remaining)} · ${this.formatCurrency(this.capTotal * remaining / 100)}`
          : '—';

        if (this.capTotal <= 0 || this.capPosition <= 0) {
          this.capWeightText = '—';
          this.capPosDropText = '—';
          return;
        }

        const weight = this.capPosition / this.capTotal;
        this.capWeightText = this.formatPercent(weight * 100);
        const posDrop = remaining / weight;
        this.capPosDropText = Number.isFinite(posDrop)
          ? (posDrop >= 100 ? '≥100%' : this.formatPercent(posDrop))
          : '—';
      },

      normalizeNote(raw) {
        const cleaned = String(raw || '').replace(/\s+/g, ' ').trim();
        const truncated = cleaned.length > NOTE_LIMIT;
        const note = truncated ? cleaned.slice(0, NOTE_LIMIT) : cleaned;
        const empty = !note && String(raw || '').trim().length > 0;
        return { note, truncated, empty };
      },

      saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          drawdown: this.drawdown,
          portfolio: this.portfolio
        }));
      },

      loadState() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (!raw) return;
          const state = JSON.parse(raw);
          if (typeof state.drawdown === 'number') this.drawdown = state.drawdown;
          if (typeof state.portfolio === 'number') this.portfolio = state.portfolio;
        } catch (_) {
          // Ignore invalid local state.
        }
      },

      loadScenarios() {
        try {
          const raw = localStorage.getItem(SCENARIOS_KEY);
          const list = raw ? JSON.parse(raw) : [];
          return Array.isArray(list) ? list : [];
        } catch (_) {
          return [];
        }
      },

      saveScenarios(list) {
        localStorage.setItem(SCENARIOS_KEY, JSON.stringify(list));
        this.scenarios = list;
      },

      saveScenario() {
        const { note, truncated, empty } = this.normalizeNote(this.note);
        const list = [
          ...this.scenarios,
          {
            id: String(Date.now()),
            drawdown: this.drawdown,
            portfolio: this.portfolio,
            note,
            ts: Date.now()
          }
        ].slice(-3);
        this.saveScenarios(list);
        this.note = '';
        if (truncated) this.toast(config.text.toastSavedTrimmed);
        else if (empty) this.toast(config.text.toastSavedEmpty);
        else this.toast(config.text.toastSaved);
      },

      applyScenario(id) {
        const item = this.scenarios.find((entry) => entry.id === id);
        if (!item) return;
        this.drawdown = clampNonNegative(item.drawdown);
        this.portfolio = clampNonNegative(item.portfolio);
        this.update();
        this.toast(config.text.toastApplied);
      },

      removeScenario(id) {
        this.saveScenarios(this.scenarios.filter((item) => item.id !== id));
        this.toast(config.text.toastRemoved);
      },

      clearScenarios() {
        this.saveScenarios([]);
        this.toast(config.text.toastCleared);
      },

      scenarioTitle(item) {
        return config.text.scenarioTitle(this.getBand(Number(item.drawdown)).label, Number(item.drawdown));
      },

      scenarioMeta(item) {
        const drawdown = Number(item.drawdown);
        const portfolio = clampNonNegative(item.portfolio);
        const loss = portfolio > 0 ? `-${this.formatCurrency(portfolio * (drawdown / 100))}` : '—';
        const recovery = drawdown >= 99 ? 0 : ((1 / (1 - drawdown / 100)) - 1) * 100;
        const portfolioText = portfolio > 0 ? this.formatCurrency(portfolio) : '—';
        return config.text.scenarioMeta(loss, recovery.toFixed(1), portfolioText);
      },

      scenarioTime(item) {
        if (!item.ts) return '';
        const time = new Date(item.ts).toLocaleString(config.locale, { dateStyle: 'medium' });
        return config.text.scenarioTime(time);
      },

      buildScenarioSummary(item) {
        const drawdown = Number(item.drawdown);
        const portfolio = clampNonNegative(item.portfolio);
        const recovery = drawdown >= 99 ? 0 : ((1 / (1 - drawdown / 100)) - 1) * 100;
        const band = this.getBand(drawdown).label;
        const loss = portfolio > 0 ? `-${this.formatCurrency(portfolio * (drawdown / 100))}` : '—';
        const portfolioText = portfolio > 0 ? this.formatCurrency(portfolio) : '—';
        return config.text.scenarioSummary(band, drawdown, loss, recovery.toFixed(1), portfolioText, item.note || '');
      },

      loadSignals() {
        try {
          const raw = localStorage.getItem(SIGNAL_KEY);
          const parsed = raw ? JSON.parse(raw) : {};
          return parsed && typeof parsed === 'object' ? parsed : {};
        } catch (_) {
          return {};
        }
      },

      saveSignals(signals) {
        localStorage.setItem(SIGNAL_KEY, JSON.stringify(signals));
      },

      bumpSignal(kind) {
        const signals = this.loadSignals();
        const page = signals[config.page] || { views: 0, helpful: 0, needsWork: 0, summaryCopy: 0, scenarioCopy: 0, feedbackCopy: 0 };
        page[kind] = (page[kind] || 0) + 1;
        signals[config.page] = page;
        this.saveSignals(signals);
      },

      async copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(text);
            return;
          } catch (_) {
            // Fallback below.
          }
        }
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
        } catch (_) {
          // Best effort copy.
        }
        document.body.removeChild(ta);
      },

      async copySummary() {
        await this.copyText(this.summaryText);
        this.bumpSignal('summaryCopy');
        this.toast(config.text.toastCopied);
      },

      async copyScenario(id) {
        const item = this.scenarios.find((entry) => entry.id === id);
        if (!item) return;
        await this.copyText(this.buildScenarioSummary(item));
        this.bumpSignal('scenarioCopy');
        this.toast(config.text.toastCopied);
      },

      recordFeedback(kind) {
        this.bumpSignal(kind);
        this.feedbackHint = config.text.feedbackSaved;
        setTimeout(() => {
          this.feedbackHint = config.text.feedbackLocalOnly;
        }, 1400);
      },

      async copyFeedbackSummary() {
        const pageSignals = this.loadSignals()[config.page] || {};
        await this.copyText(config.text.feedbackSummary(config.page, JSON.stringify(pageSignals)));
        this.bumpSignal('feedbackCopy');
        this.feedbackHint = config.text.feedbackCopied;
        setTimeout(() => {
          this.feedbackHint = config.text.feedbackLocalOnly;
        }, 1400);
      },

      installToast() {
        const el = document.createElement('div');
        el.className = 'toast';
        document.body.appendChild(el);
        this.toastEl = el;
      },

      toast(message) {
        if (!this.toastEl) return;
        this.toastEl.textContent = message;
        this.toastEl.classList.add('show');
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.toastEl.classList.remove('show'), 1400);
      }
    };
  };
})();
