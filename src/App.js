import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const originalPattern = "1040";
  const originalButtonNos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [pattern, setPattern] = useState(originalPattern);
  const [buttonNumbers, setButtonNumbers] = useState(originalButtonNos);
  const [format, setFormat] = useState("P");
  console.log(pattern);
  // Pattern -> String env variable, Format -> Array of format characters, onSuccess -> Callback function, onFailure -> Callback function, tries -> Number of tries
  // "P" => Original, "Q" => shuffles odd with even, "R" => Reverse, "S" => first even then odd
  // Q => 1, 0, 3, 2, 5, 4, 7, 6, 9, 8
  const [enteredPattern, setEnteredPattern] = useState("");
  if (enteredPattern.length === pattern.length) {
    if (pattern === enteredPattern) {
      alert("Pattern similarity");
    } else {
      alert("Pattern similarity mismatch");
    }
  }
  const inputWidthinPercent = window.innerWidth > 400 ? window.innerWidth >= 400 && window.innerWidth <= 900 ? 10 : 6 : 18;
  function formatP() {
    const temp = buttonNumbers;
    temp.sort((a, b) => a - b);
    const newPattern = Array.from(originalPattern).sort((a, b) => a - b).toLocaleString().replace(/,/g, "");
    setButtonNumbers(temp);
    setPattern(newPattern);
  }
  function formatQ() {
    const arr = swapOddWithEven(originalButtonNos);
    const patternArr = swapOddWithEven(Array.from(originalPattern));
    const newPattern = patternArr.toLocaleString().replace(/,/g, "");
    setButtonNumbers(arr);
    setPattern(newPattern);
  }
  function swapOddWithEven(arr) {
    const oddNumbers = [];
    const evenNumbers = [];

    for (const num of arr) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
    }

    const shuffledArray = [];
    const maxLength = Math.max(oddNumbers.length, evenNumbers.length);

    for (let i = 0; i < maxLength; i++) {
      if (oddNumbers[i] !== undefined) {
        shuffledArray.push(oddNumbers[i]);
      }
      if (evenNumbers[i] !== undefined) {
        shuffledArray.push(evenNumbers[i]);
      }
    }
    return shuffledArray;
  }
  function formatR() {
    const temp = originalButtonNos.reverse();
    const newPattern = Array.from(originalPattern).reverse().toLocaleString().replace(/,/g, "");
    setButtonNumbers(temp);
    setPattern(newPattern);
  }
  function firstEvenLastOdd(arr) {
    const evenPart = [];
    const oddPart = [];
    for (let i = 0; i < arr.length; i++) {
      // If even add it
      if (arr[i] % 2 === 0) {
        evenPart.push(arr[i]);
      } else {
        oddPart.push(arr[i]);
      }
    }
    const resultArr = evenPart.concat(oddPart);
    return resultArr;
  }
  function formatS() {
    setButtonNumbers(firstEvenLastOdd(originalButtonNos));
    setPattern(firstEvenLastOdd(Array.from(originalPattern)).toLocaleString().replace(/,/g, ""));
  }
  function shuffleFormat(e) {
    switch (format) {
      case "P":
        formatP();
        setFormat("Q");
        break;
      case "Q":
        formatQ();
        setFormat("R");
        break;
      case "R":
        formatR();
        setFormat("S");
        break;
      case "S":
        formatS();
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
    // console.log(enteredPattern.length === pattern.length);
    setEnteredPattern((prevValue) => prevValue + currentVal);
  }
  return (
    <div className="enigma-pattern-container">
      <input
        type="password"
        name="text"
        className="enigma-input"
        placeholder="Enter Pattern.."
        readOnly
        style={{ width: (pattern.length * inputWidthinPercent) + "%" }}
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
        type="button"
        onClick={shuffleFormat}
      >
        🔀 Format
      </button>
    </div>
  );
}

export default App;
