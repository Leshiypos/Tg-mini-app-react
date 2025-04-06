import styles from "./header.module.css";
import Button from "../button/button";
import useTelegram from "../../hooks/useTelegram";

export default function Header() {
  const { tg, user, onClose } = useTelegram();

  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={styles.username}>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
}
