# Theme Switcher for Digital Garden

Adds a palette button to the Digital Garden navigation. Each press cycles
through Seventy-Seven, MU-TH-UR and E-ink, and the visitor's last choice is
remembered in local storage. Seventy-Seven is the default.

The plugin deliberately contains no palette. It sets `data-dg-theme` on the
document root and keeps the standard `theme-light` and `theme-dark` body
classes compatible with Digital Garden. The garden owner's stylesheet remains
the single source of truth for colour and chamfered geometry.

## Install

Copy this directory to:

```text
src/plugins/theme-switcher/
```

Enable `theme-switcher` in Digital Garden's plugin manager. If configuring the
repository by hand, ensure `src/plugins/plugins.json` contains an enabled entry
for `theme-switcher`.

## Behaviour

- Defaults to Seventy-Seven.
- Saves the choice under `infodeck-palette` in local storage.
- Updates the existing `theme-light` and `theme-dark` body classes for
  compatibility with Obsidian-derived styles.
- Adds the control to both navigation variants; only the active navigation is
  rendered by the garden.

## Development check

Copy the plugin into a current `oleeskild/digitalgarden` checkout, enable it,
and run `npm run dev`. Clear local storage, cycle through all three palettes,
then reload to verify persistence.
