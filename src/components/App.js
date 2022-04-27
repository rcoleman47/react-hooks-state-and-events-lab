import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDark, setIsDark] = useState(false);
  
  const handleClick = ()=>{
    setIsDark(isDark => !isDark);
  }
  
  const appClass = isDark ? "App dark" : "App light"
  const setMode = isDark? "Dark Mode": "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >{setMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
