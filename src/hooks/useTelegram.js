const tg = window.Telegram.WebApp;

export default function useTelegram() {
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
