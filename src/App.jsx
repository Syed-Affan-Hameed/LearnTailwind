import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-400  container mx-auto">
        <h1> This is SetCount </h1>
      </div>
      <div className="bg-blue-300 size-96 relative">
        <div className="bg-blue-600 size-16 absolute right-0"></div>
        <div className="bg-red-600 size-16 absolute left-0 top-0"></div>
        <div className="bg-yellow-600 size-16 absolute left-0 bottom-0"></div>
        <div className="bg-violet-600 size-16 absolute right-0 bottom-0"></div>
      </div>
    </>
  );
}

export default App;
