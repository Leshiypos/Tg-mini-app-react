import { useEffect } from "react";
import "./App.css";
import Header from "./component/header/header";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <p>ПРивет омлет Как дела</p>
    </>
  );
}

export default App;
