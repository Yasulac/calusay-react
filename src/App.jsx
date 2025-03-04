import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App(){

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  
  const reset = () => {
    setCount(0)
  }

  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval with caution
    } catch {
      setInput("Error");
    }
  };
  return (
  <div>

    <div class="container">
      <h1>Number  </h1>
        <p class="container-p">{count}</p>
        <button class="btn btn-primary" onClick={increment}>Increment</button>
        <button class="btn btn-primary" onClick={reset}>reset</button>

    </div>

    <div class="container">
    <div className="flex flex-col items-center p-4 bg-gray-200 min-h-screen">
      <div className="w-72 bg-white p-4 rounded shadow-lg">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right text-2xl border rounded mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((char) => (
            <button key={char} className="btn" onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button key={char} className="btn" onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button key={char} className="btn" onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
          {["0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              className="btn"
              onClick={char === "=" ? calculateResult : () => handleClick(char)}
            >
              {char}
            </button>
          ))}
          <button className="col-span-4 btn bg-red-500" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </div>
    </div>

  </div>


  )
}
export default App
