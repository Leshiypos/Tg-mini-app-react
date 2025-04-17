import useTelegram from "../../hooks/useTelegram";
import ProductItem from "../product-item/product-item";
import styles from "./product-list.module.css";
import { products } from "../../utils/api";
import { useCallback, useEffect, useState } from "react";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export default function ProductList() {
  const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

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
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  const onSendData = useCallback(() => {
    data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

	fetch('http://213.232.229.46:5172/web-data',{
		method: 'POST',
		headers:{
			'Content-Type' : 'application/json',
		},
		body: JSON.stringify(data)
	})
  }, [addedItems, queryId]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => tg.offEvent("mainButtonClicked", onSendData);
  }, [onSendData]); //Указать в зависимостях onSendData для передачи актуальных данных

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
