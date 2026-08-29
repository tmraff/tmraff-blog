# Theme Switcher for Digital Garden

Adds a light/dark-mode button to the Digital Garden navbar or filetree. The
plugin remembers a visitor's explicit choice in local storage. Until a choice
is made, it follows the visitor's operating-system colour preference and reacts
when that preference changes.

The plugin deliberately contains no palette. It switches the standard
`theme-light` and `theme-dark` body classes and sets `data-dg-theme` on the
document root. The garden owner's stylesheet therefore remains the single
source of truth for both colour schemes. The plugin has no dependencies and
makes no changes outside its own directory.

## Install

Copy this directory to:

```text
src/plugins/theme-switcher/
```

Enable `theme-switcher` in Digital Garden's plugin manager. If configuring the
repository by hand, ensure `src/plugins/plugins.json` contains an enabled entry
for `theme-switcher`.

## Behaviour

- Defaults to `prefers-color-scheme`.
- Saves an explicit choice under `digital-garden-colour-theme` in local storage.
- Updates the existing `theme-light` and `theme-dark` body classes for
  compatibility with Obsidian-derived styles.
- Adds the control to both navigation variants; only the active navigation is
  rendered by the garden.

## Development check

Copy the plugin into a current `oleeskild/digitalgarden` checkout, enable it,
and run `npm run dev`. Test the system default with local storage cleared, then
toggle twice and reload to verify persistence.
