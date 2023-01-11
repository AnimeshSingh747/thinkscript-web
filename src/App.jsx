import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="/thinkscript.png" alt="logo" className="logo" />
      <h1>Thanks for Visiting 😊</h1>
      <h3>We are under development 🚧</h3>
    </>
  );
}

export default App;
