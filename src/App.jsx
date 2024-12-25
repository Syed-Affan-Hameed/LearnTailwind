import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="h-screen">

    <div className="bg-black flex">
      <ul className="flex text-white [&>*]:flex">
        <li><a className="p-3 hover:bg-zinc-400" href="">Home</a></li>
        <li><a className="p-3 hover:bg-zinc-400" href="">News</a></li>
        <li><a className="p-3 hover:bg-zinc-400" href="">Contact</a></li>
        <li><a className="p-3 hover:bg-zinc-400" href="">About us</a></li>
      </ul>
    </div>
   <div className="bg-blue-400 w-auto">
    <h1>Learn Tailwind width</h1>
   </div>
   <div className="bg-blue-400 w-fit hover:w-1/2">
    <h1>Learn Tailwind better width</h1>
   </div>
   <div className="bg-blue-400 h-10 min-h-7  hover:h-1/4">
    <h1>Learn Tailwind better hieght</h1>
   </div>

   <div className="bg-blue-400 size-96 ">
    <h1> Learn Tailwind size </h1>
   </div>
    </div>
    </>
  );
}

export default App;
