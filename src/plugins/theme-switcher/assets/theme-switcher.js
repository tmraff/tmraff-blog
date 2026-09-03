(() => {
  "use strict";

  const storageKey = "infodeck-palette";
  const root = document.documentElement;
  const themes = ["seventy-seven", "mu-th-ur", "e-ink"];
  const labels = {
    "seventy-seven": "Seventy-Seven",
    "mu-th-ur": "MU-TH-UR",
    "e-ink": "E-ink"
  };

  function readPreference() {
    try {
      const preference = window.localStorage.getItem(storageKey);
      return themes.includes(preference) ? preference : null;
    } catch (_error) {
      return null;
    }
  }

  function savePreference(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (_error) {
      // The switch still works when storage is unavailable.
    }
  }

  function updateButtons(theme) {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];

    document.querySelectorAll("[data-dg-theme-toggle]").forEach((button) => {
      const label = `Palette: ${labels[theme]}. Switch to ${labels[next]}`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.dataset.dgThemeCurrent = theme;
      const text = button.querySelector("[data-dg-theme-label]");
      if (text) text.textContent = labels[theme];
    });
  }

  function applyTheme(theme, persist = false) {
    root.dataset.dgTheme = theme;
    root.style.colorScheme = theme === "seventy-seven" ? "dark" : "light";

    if (document.body) {
      document.body.classList.toggle("theme-dark", theme === "seventy-seven");
      document.body.classList.toggle("theme-light", theme !== "seventy-seven");
    }

    updateButtons(theme);

    if (persist) {
      savePreference(theme);
    }
  }

  applyTheme(readPreference() || "seventy-seven");

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dg-theme-toggle]");
    if (!button) return;

    const current = themes.includes(root.dataset.dgTheme)
      ? root.dataset.dgTheme
      : themes[0];
    applyTheme(themes[(themes.indexOf(current) + 1) % themes.length], true);
  });
})();
