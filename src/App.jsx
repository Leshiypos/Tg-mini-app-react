import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => tg.close();

  return (
    <>
      <p>ПРивет омлет Как дела</p>
      <button onClick={onClose}>Закрыть</button>
    </>
  );
}

export default App;
