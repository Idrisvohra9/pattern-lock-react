import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const pattern = "1132";
  const [buttonNumbers, setButtonNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [format, setFormat] = useState("P");
  // "P" => Original, "Q" => shuffles odd with even, "R" => Reverse, "S" => first even then odd
  const [enteredPattern, setEnteredPattern] = useState("");
  if (enteredPattern.length === pattern.length) {
    if (pattern === enteredPattern) {
      alert("Pattern similarity");
    } else {
      alert("Pattern similarity mismatch");
    }
  }
  function formatP(){

  }
  function formatQ(){
    
  }
  function formatR(){
    
  }
  function formatS(){
    
  }
  function shuffleFormat(e) {
    switch (format) {
      case "P":
        setFormat("Q")
        break;
      case "Q":
        setFormat("R");
        break;
      case "R":
        setFormat("S");
        break;
      case "S":
        setFormat("P");
        break;
      default:
        break;
    }
    // console.log(e.target.innerHTML);
    e.target.innerText = "🔀 Format";
    e.target.innerText = e.target.innerText + "(" + format + ")";
  }
  function checkPattern(e) {
    const currentVal = e.currentTarget.innerHTML;
    console.log(enteredPattern.length === pattern.length);
    setEnteredPattern((prevValue) => prevValue + currentVal);
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="password"
          name="text"
          className="input"
          placeholder="Enter Pattern.."
          readOnly
          value={enteredPattern}
        />
        <div className="btns-container">

          {
            buttonNumbers.map((num, i) => <Button value={num} key={i} checkPattern={checkPattern} />)
          }
        </div>
        <button
          className="btn btn-danger mt-3"
          type="reset"
          onClick={() => setEnteredPattern("")}
        >
          ↩ Clear
        </button>
        <button
          className="btn btn-primary mt-3"
          type="reset"
          onClick={shuffleFormat}
        >
          🔀 Format
        </button>
      </header>
    </div>
  );
}

export default App;
