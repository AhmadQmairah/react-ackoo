let initialized = false;

export default {
  /* eslint-disable */
  init(appKey) {
    !(function (c, t) {
      ((t = c.createElement("script")).type = "text/javascript"),
        (t.async = !0),
        (t.onload = function () {
          ackoo.init(appKey);
        }),
        (t.src = "https://web-sdk.ackoo.app/script.js"),
        c.getElementsByTagName("head")[0].appendChild(t);
    })(document);
    /* eslint-enable */
    initialized = true;
  },

  addToCart(data) {
    if (!initialized) return;
    ackoo.trackAddToCart(data); // eslint-disable-line
  },
  viewItem(data) {
    if (!initialized) return;

    ackoo.trackViewItem(data); // eslint-disable-line
  },
  checkout(data) {
    if (!initialized) return;
    ackoo.trackCheckout(data); // eslint-disable-line
  },
  initialized,
};
