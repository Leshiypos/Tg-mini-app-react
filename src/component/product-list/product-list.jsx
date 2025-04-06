import useTelegram from "../../hooks/useTelegram";
import styles from "./product-list.module.css";

export default function ProductList() {
  const { onTooglButton } = useTelegram();
  return (
    <div>
      Product List
      <button onChange={onTooglButton}>Переключить кнопку</button>
    </div>
  );
}
