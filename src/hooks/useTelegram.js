const tg = window.Telegram.WebApp;

export default function useTelegram() {
  const onClose = () => tg.close();

  const onTooglButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg,
    onClose,
    onTooglButton,
    user: tg.initDataUnsafe?.user,
  };
}
