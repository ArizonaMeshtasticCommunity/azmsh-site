// Keeps the home page coverage map (an iframe from api.azmsh.net) in the same
// light/dark mode as this site, including when the toggle in the header is used.
(function () {
  const MAP_ORIGIN = 'https://api.azmsh.net';

  function frames() {
    return document.querySelectorAll('iframe.azmsh-coverage-map');
  }

  function currentTheme() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate' ? 'dark' : 'light';
  }

  function send() {
    const message = { type: 'azmsh-theme', theme: currentTheme() };
    frames().forEach((frame) => {
      if (frame.contentWindow) frame.contentWindow.postMessage(message, MAP_ORIGIN);
    });
  }

  if (!frames().length) return;

  // The map says when it is ready, so a lazily loaded frame still gets the theme.
  window.addEventListener('message', (event) => {
    if (event.origin === MAP_ORIGIN && event.data && event.data.type === 'azmsh-coverage-ready') send();
  });

  // Material switches the scheme by changing this attribute on <body>.
  new MutationObserver(send).observe(document.body, {
    attributes: true,
    attributeFilter: ['data-md-color-scheme'],
  });

  frames().forEach((frame) => frame.addEventListener('load', send));
})();
