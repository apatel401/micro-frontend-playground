import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import CounterNew from "remote/CounterNew";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
  CounterNew(divRef.current);
  }, []);
return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: react-host</div>
    <div>Framework: react</div>
    <div ref={divRef}></div>
  </div>
);
}
  
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)