// Accessibility: make the "Skip to content" link reliably move keyboard focus
// into the main content, not just scroll there. Heading targets are not
// focusable by default, so without this, activating the link leaves focus on
// <body> and (on short pages) appears to do nothing. Activating a link with the
// mouse or with Enter both fire a "click" event, so this covers both.
(function () {
  function focusSkipTarget(link) {
    var href = link.getAttribute("href") || "";
    var id = href.split("#")[1];
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }
    // Let the browser apply the hash/scroll first, then place focus.
    setTimeout(function () {
      target.focus();
    }, 0);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a.md-skip") : null;
    if (link) focusSkipTarget(link);
  });
})();
