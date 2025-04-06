import Button from "../button/button";
import styles from "./product-item.module.css";

export default function ProductItem({ product, className, onAdd }) {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={styles.product}>
      <div className={styles.img}></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
        <Button className={styles.add_btn} onClick={onAddHandler}>
          Добваить в корзину
        </Button>
      </div>
    </div>
  );
}
