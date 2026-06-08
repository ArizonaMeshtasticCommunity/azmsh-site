# Accessibility checklist (WCAG 2.1 AA)

Living checklist for the Arizona Meshtastic Community site. Update the status as
things are fixed or verified. See [ACCESSIBILITY.md](ACCESSIBILITY.md) for how to
run the automated audit.

## Status legend

| Mark | Meaning |
| --- | --- |
| ✅ auto | Verified automatically (pa11y / HTML_CodeSniffer, `mkdocs --strict`) |
| ✅ tree | Verified against the browser accessibility tree (what a screen reader consumes) |
| ✅ check | Verified by inspecting the source / rendered HTML |
| 🟡 manual | Needs a human pass with a real screen reader or keyboard. Not yet done. |
| ⬜ todo | Not started |
| n/a | No content on the site triggers this criterion |

> **The honest gap:** automated tools and the accessibility-tree check cover
> roughly 30 to 50% of WCAG. The 🟡 items below can only be confirmed by a person
> using a real screen reader or keyboard. Everything ✅ has evidence behind it.

## 1. Perceivable

| Criterion | Status | Notes |
| --- | --- | --- |
| 1.1.1 Non-text content (alt text) | ✅ tree | Every image has descriptive `alt`; confirmed in the accessibility tree on all sampled pages. |
| 1.3.1 Info & relationships (semantic structure) | ✅ auto | Headings, lists, landmarks are real semantic HTML (Material theme). |
| 1.3.2 Meaningful sequence | ✅ check | DOM order matches reading order. |
| 1.4.1 Use of color | 🟡 manual | Spot-check that no info is conveyed by color alone. The red/blue "highlighted" callouts in screenshots are described in the surrounding text, and they are. |
| 1.4.3 Contrast (minimum) 4.5:1 | ✅ auto | Was the big failure (121 issues, header at 2.78:1). Fixed via `docs/stylesheets/extra.css`; pa11y now reports 0. |
| 1.4.4 Resize text to 200% | 🟡 manual | Zoom browser to 200% and confirm no clipping or overlap. Material is responsive; expected to pass. |
| 1.4.5 Images of text | ✅ check | No images of text used for body content (screenshots are illustrative and described in alt). |
| 1.4.10 Reflow (320px) | 🟡 manual | Check at 320px width or 400% zoom for horizontal scrolling. Material is responsive. |
| 1.4.11 Non-text contrast (UI/icons) | 🟡 manual | Confirm icon and button borders meet 3:1 in both themes. |
| 1.4.12 Text spacing | 🟡 manual | Apply a text-spacing bookmarklet; confirm no loss of content. |

## 2. Operable

| Criterion | Status | Notes |
| --- | --- | --- |
| 2.1.1 Keyboard | 🟡 manual | Controls are native and focusable (verified in source). Needs a full Tab walk-through; see the procedure below. |
| 2.1.2 No keyboard trap | 🟡 manual | Verify focus can leave the search box, theme toggle, and the embedded Discord and IRC iframes. |
| 2.4.1 Bypass blocks (skip link) | ✅ check | "Skip to content" link present on **every** page (homepage was fixed). |
| 2.4.2 Page titled | ✅ check | Each page has a unique `<title>`. |
| 2.4.3 Focus order | 🟡 manual | Tab order should match visual order; confirm by hand. |
| 2.4.4 Link purpose (in context) | ✅ tree | All link names are meaningful. Renamed the generic "Learn More" link to "Learn how to connect". |
| 2.4.5 Multiple ways | ✅ check | Site has nav tabs, search, and in-page links. |
| 2.4.6 Headings & labels | ✅ tree | Headings are descriptive; first heading present on every page. |
| 2.4.7 Focus visible | 🟡 manual | Confirm a visible focus ring on all interactive elements in both themes. Material ships focus styles; verify the darkened header did not reduce ring contrast. |
| 2.5.3 Label in name | ✅ check | Visible button text matches accessible name. |

## 3. Understandable

| Criterion | Status | Notes |
| --- | --- | --- |
| 3.1.1 Language of page | ✅ check | `<html lang="en">` set (`theme.language: en`). |
| 3.2.1 On focus (no surprise change) | ✅ check | No context change on focus. |
| 3.2.2 On input | ✅ check | Theme toggle and search change content as expected; no unexpected navigation. |
| 3.2.3 Consistent navigation | ✅ check | Same nav on every page (Material). |
| 3.3.1 / 3.3.2 Error ID & labels (forms) | n/a | Site has no data-entry forms (search and theme are framework controls; see ACCESSIBILITY.md). |

## 4. Robust

| Criterion | Status | Notes |
| --- | --- | --- |
| 4.1.2 Name, role, value | ✅ tree | Links, buttons, images, and landmarks all expose a correct role and name in the accessibility tree. Two framework controls are documented exceptions (see ACCESSIBILITY.md). |
| 4.1.3 Status messages | ⬜ todo | The homepage live node-counts update silently. Consider `aria-live="polite"` so screen readers announce updated counts. Low priority. |

---

## Manual screen-reader test procedure ("make sure voice works")

Automated tools cannot confirm the *experience*. Do this short pass once, ideally
on both a desktop and a mobile screen reader. No purchase needed. **VoiceOver**
(built into macOS and iOS) and **NVDA** (free, Windows) are enough.

### VoiceOver (macOS), built in and free
1. Turn it on with **Cmd + F5** (or System Settings, Accessibility, VoiceOver).
2. Open the site. Press **VO + A** (VO = Control + Option) to read continuously.
3. Pull up the **rotor** with **VO + U**, then arrow through *Headings*, *Links*,
   and *Landmarks*. Check that:
   - The heading list is logical (one H1, sensible order).
   - Every link name makes sense on its own (no bare "here" or "more").
   - Landmarks include banner, navigation, main, and content info.
4. Press **VO + Cmd + H** to jump heading to heading through a content page.
5. Test the **skip link**: reload, then press **Tab** once. You should hear
   "Skip to content". Activate it and confirm focus lands in the main content.
6. Open the **theme toggle** and **search** with the keyboard; confirm they are
   announced and operable.

### NVDA (Windows), free download from nvaccess.org
1. Start NVDA (**Ctrl + Alt + N**).
2. Read all with **NVDA + Down Arrow** (NVDA key = Insert or Caps Lock).
3. Open element lists with **NVDA + F7**, then review *Links*, *Headings*, and
   *Landmarks* (same checks as the rotor above).
4. Navigate by heading with **H**, by landmark with **D**, by link with **K**.
5. Confirm the **skip link** (Tab from the top of the page) and that focus is
   never trapped in the search box or the embedded Discord and IRC iframes (Tab
   should move past them).

### Keyboard-only pass (no mouse, any OS)
1. Put the mouse aside. From the top of each page, press **Tab** repeatedly.
2. Confirm that a **visible focus ring** is always present, that focus order
   matches the visual layout, that you can reach and activate every link, button,
   tab, and toggle, and that focus is never trapped. **Esc** should close the
   image lightbox, and the arrow keys should move between lightbox images.

### Record results here

| Date | Tester | Tool | Pages | Result / issues found |
| --- | --- | --- | --- | --- |
| _pending_ | | | | |
