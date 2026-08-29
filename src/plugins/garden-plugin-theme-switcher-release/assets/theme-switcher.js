(() => {
  "use strict";

  const storageKey = "digital-garden-colour-theme";
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function readPreference() {
    try {
      const preference = window.localStorage.getItem(storageKey);
      return preference === "light" || preference === "dark" ? preference : null;
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
    const target = theme === "dark" ? "light" : "dark";

    document.querySelectorAll("[data-dg-theme-toggle]").forEach((button) => {
      const label = `Switch to ${target} mode`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", String(theme === "dark"));
    });
  }

  function applyTheme(theme, persist = false) {
    root.dataset.dgTheme = theme;
    root.style.colorScheme = theme;

    if (document.body) {
      document.body.classList.toggle("theme-light", theme === "light");
      document.body.classList.toggle("theme-dark", theme === "dark");
    }

    updateButtons(theme);

    if (persist) {
      savePreference(theme);
    }
  }

  const savedTheme = readPreference();
  applyTheme(savedTheme || (systemTheme.matches ? "dark" : "light"));

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dg-theme-toggle]");
    if (!button) return;

    const current = root.dataset.dgTheme === "light" ? "light" : "dark";
    applyTheme(current === "dark" ? "light" : "dark", true);
  });

  systemTheme.addEventListener("change", (event) => {
    if (!readPreference()) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
})();
