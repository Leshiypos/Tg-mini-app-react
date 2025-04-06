import styles from "./header.module.css";
import Button from "../button/button";

export default function Header() {
  const tg = window.Telegram.WebApp;
  const onClose = () => tg.close();

  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={styles.username}>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
}
