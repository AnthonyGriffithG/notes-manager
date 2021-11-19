export function updateClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      /* clipboard successfully set */
    },
    function () {
      /* clipboard write failed */
    }
  );
}

export function wait(sec, handler) {
  setTimeout(() => {
    handler();
  }, sec);
}
