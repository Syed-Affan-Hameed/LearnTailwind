import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <div className="bg-black ">
    <ul className="flex ">
      <li><a href="#" className="text-white p-3 flex hover:bg-slate-600">Home</a></li>
      <li><a href="#" className="text-white p-3 flex hover:bg-slate-600">News</a></li>
      <li><a href="#" className="text-white p-3 flex hover:bg-slate-600">Contact</a></li>
      <li><a href="#" className="text-white p-3 flex hover:bg-slate-600">About</a></li>
    </ul>
     </div>
     <div className="container mx-auto">
     <div className="bg-blue-500 mx-auto h-20  m-2">
      <h1>this is the first container div</h1>
     </div>
     <div className="bg-blue-800 mx-auto h-20 m-2">
      <h1>this is the first container div</h1>
     </div>
     <div className="bg-violet-800 mx-auto h-20 m-2">
      <h1>this is the first container div</h1>
     </div>
     </div>

     <div className="bg-[url(assets/AI_Image.jpg)] bg-no-repeat h-96 bg-center bg-contain"></div>
     <div className="gradient bg-gradient-to-t from-slate-500 to-black bg-no-repeat size-40 bg-contain mx-auto"></div>
    </>
  );
}

export default App;
