import { useEffect } from "react";
import styles from "./App.module.css";
import Header from "./component/header/header";
import useTelegram from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./component/product-list/product-list";
import Form from "./component/form/form";

function App() {
  const { tg, onTooglButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
