export default function useTelegram() {
  const tg = window.Telegram.WebApp;
  const onClose = () => tg.close();

  const onTooglButton = () => {
    tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();
  };
  return {
    tg,
    onClose,
    onTooglButton,
    user: tg.initDataUnsafe?.user,
  };
}
