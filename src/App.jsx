import React, { useState } from "react";
import "./styles.css";

function App() {
  const [input, setInput] = useState("0");

  const handleNumber = (num) => {
    if (input === "0") {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  const handleOperator = (op) => {
    const lastChar = input[input.length - 1];

    if ("+-*/".includes(lastChar)) {
      // replace last operator
      setInput(input.slice(0, -1) + op);
    } else {
      setInput(input + op);
    }
  };

  const handleDecimal = () => {
    const parts = input.split(/[\+\-\*\/]/);
    const last = parts[parts.length - 1];

    if (!last.includes(".")) {
      setInput(input + ".");
    }
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleEquals = () => {
    try {
      let result = eval(input).toString();
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  return (
    <div id="calculator">
      
      <div id="display">{input}</div>

      <button id="clear" onClick={handleClear}>AC</button>

      <button id="seven" onClick={() => handleNumber("7")}>7</button>
      <button id="eight" onClick={() => handleNumber("8")}>8</button>
      <button id="nine" onClick={() => handleNumber("9")}>9</button>
      <button id="divide" onClick={() => handleOperator("/")}>/</button>

      <button id="four" onClick={() => handleNumber("4")}>4</button>
      <button id="five" onClick={() => handleNumber("5")}>5</button>
      <button id="six" onClick={() => handleNumber("6")}>6</button>
      <button id="multiply" onClick={() => handleOperator("*")}>*</button>

      <button id="one" onClick={() => handleNumber("1")}>1</button>
      <button id="two" onClick={() => handleNumber("2")}>2</button>
      <button id="three" onClick={() => handleNumber("3")}>3</button>
      <button id="subtract" onClick={() => handleOperator("-")}>-</button>

      <button id="zero" onClick={() => handleNumber("0")}>0</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
      <button id="equals" onClick={handleEquals}>=</button>
      <button id="add" onClick={() => handleOperator("+")}>+</button>

    </div>
  );
}

export default App;