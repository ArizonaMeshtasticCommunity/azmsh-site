# Accessibility testing

This site targets **WCAG 2.1 Level AA**. Accessibility is checked with
[`pa11y-ci`](https://github.com/pa11y/pa11y-ci), which runs the HTML_CodeSniffer
WCAG2AA ruleset against the built site in a local headless Chromium. No account
or API key is required; pa11y is free and runs entirely on your machine.

## Running the audit locally

```bash
# 1. Build/serve the site (in one terminal)
mkdocs serve            # serves at http://127.0.0.1:8000

# 2. Install pa11y-ci once (downloads a headless Chromium ~150 MB)
npm install -g pa11y-ci

# 3. Run the audit (in another terminal, from the repo root)
pa11y-ci
```

`pa11y-ci` reads [`.pa11yci`](.pa11yci) for the page list, the WCAG2AA standard,
and the documented rule exceptions below. A clean run reports
`11/11 URLs passed`.

> On a minimal Linux box, headless Chromium needs system libraries. Install them
> with: `sudo apt-get install -y libatk1.0-0 libatk-bridge2.0-0 libcups2
> libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1
> libpango-1.0-0 libcairo2 libnss3 libnspr4 libdrm2 libxshmfence1 libx11-xcb1
> libasound2t64`

## Documented rule exceptions (`ignore` in `.pa11yci`)

These three findings are produced by **Material for MkDocs' own UI controls**,
not by this site's content. They appear on essentially every Material site. Each
control is keyboard-operable and has an accessible name in practice, so they are
ignored to keep the audit focused on content-level regressions. Re-evaluate these
whenever the theme is upgraded.

| Rule | Element | Why it's ignored |
| --- | --- | --- |
| `H32.2` (3.2.2), *form has no submit button* | Header **search** form and **theme/color-scheme** form | Both are live controls (search filters as you type; the toggle switches theme on change). Neither needs nor has a submit button by design. They have accessible names and work via keyboard. |
| `H91.InputCheckbox.Name` (4.1.2) | Homepage table-of-contents drawer toggle (`#__toc`) | Material's icon-only TOC toggle. It is associated with a `<label for>` and is announced by screen readers via that association; HTML_CodeSniffer does not credit icon-only labels. |
| `F68` (1.3.1) | Same `#__toc` toggle | Same root cause as above. The icon-only label is not detected as a text label by the checker. |

## What is actively enforced

Everything else, most importantly **color contrast (WCAG 1.4.3)**. The custom
overrides in [`docs/stylesheets/extra.css`](docs/stylesheets/extra.css) darken
the deep-orange header and link colors specifically to keep white-on-orange and
link text above the 4.5:1 AA threshold. If those overrides are removed, the audit
fails, by design.
