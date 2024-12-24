import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="bg-black flex">
      <ul className="flex text-white [&>*]:flex">
        <li><a className="p-3 hover:bg-zinc-400" href="">Home</a></li>
        <li><a className="p-3 hover:bg-zinc-400" href="">News</a></li>
        <li><a className="p-3 hover:bg-zinc-400" href="">Contact</a></li>
        <li><a className="p-3 hover:bg-zinc-400" href="">About us</a></li>
      </ul>
    </div>
    </>
  );
}

export default App;
