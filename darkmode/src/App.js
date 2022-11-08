import React, { useState, useEffect } from "react";
import "./App.css";
import DemoOutput from "./components/DemoOutput";
import { Button } from "./components/UI/Button";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme} App`}>
      <DemoOutput />
      <Button onClick={toggleHandler}>Darkmode/Lightmode</Button>
    </div>
  );
}

export default App;
