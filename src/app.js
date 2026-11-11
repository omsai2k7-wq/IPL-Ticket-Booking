
let toastTimer;

export function showToast(setToastMessage, message) {
  setToastMessage(message);

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    setToastMessage("");
  }, 3000);
}
