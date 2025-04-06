import { useEffect } from "react";
import styles from "./App.module.css";
import Header from "./component/header/header";
import useTelegram from "./hooks/useTelegram";

function App() {
  const { tg, onTooglButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <button onClick={onTooglButton}>Toogle</button>
      <p>ПРивет омлет Как дела</p>
    </div>
  );
}

export default App;
