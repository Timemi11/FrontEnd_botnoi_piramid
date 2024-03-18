import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let printpiramid = () => {
    let output = document.querySelector(".output");
    output.innerHTML = "";
    for (let i = 1; i <= count; i++) {
      for (let j = 1; j <= i; j++) {
        output.innerHTML += "*";
      }
      output.innerHTML += "<br>";
    }
    for (let i = 1; i <= count; i++) {
      for (let j = count - i; j > 0; j--) {
        output.innerHTML += "*";
      }
      output.innerHTML += "<br>";
    }
  };

  let handleChange = (e) => {
    console.log(e.target.value);
    setCount(e.target.value);
  };

  return (
    <div className="piramid">
      <label htmlFor="number">Input: </label>
      <input min="0" name="number" type="number" onChange={handleChange} />
      <input type="button" onClick={printpiramid} value="Submit" />
      <div className="output"></div>
    </div>
  );
}

export default App;
