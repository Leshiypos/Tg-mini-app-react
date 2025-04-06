import useTelegram from "../../hooks/useTelegram";
import ProductItem from "../product-item/product-item";
import styles from "./product-list.module.css";
import { products } from "../../utils/api";
import { useState } from "react";

const getTotelPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export default function ProductList() {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alredyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];
    if (alredyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotelPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={styles.list}>
      {products.map((item) => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={"item"}
          key={item.id}
        />
      ))}
    </div>
  );
}
