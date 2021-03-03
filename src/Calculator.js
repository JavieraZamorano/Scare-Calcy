import "./calculator.css";
import { useState } from "react";

function Calculator() {
  const [CalcyState, setCalcyState] = useState({ runningtot: "", result: "" });

  function setRunningTot(a) {
    setCalcyState(function (oldCalcState) {
      return {
        runningtot: oldCalcState.runningtot + a,

        result: oldCalcState.result,
      };
    });
    return null;
  }
  function Evaluate(sum) {
    //split string up by space delimiter
    const splitSum = sum.split(/[ ]/);

    let i;
    for (i = 0; i < splitSum.length; i++) {
      
      const leadChar = splitSum[i].slice(0, 1);

      if (leadChar == 0) {
        splitSum[i] = splitSum[i].slice(1);
      }
    }

  
    return splitSum;
  }

  function evalReplacement(calcInput) {

    const toBeEvaled = Evaluate(calcInput);

    let runningCalc = null;
    let isOperator = false;
    let operator;

    toBeEvaled.forEach(element => {
      if (isOperator) {
        isOperator = false;
        runningCalc = operator(runningCalc, parseFloat(element))
      }

      if (element === "+") {
        isOperator = true;
        operator = (current, newValue) => current + newValue;
      }

      else if (element === "-") {
        isOperator = true;
        operator = (current, newValue) => current - newValue;
      }

      else if (element === "/") {
        isOperator = true;
        operator = (current, newValue) => current / newValue;
      }

      else if (element === "*") {
        isOperator = true;
        operator = (current, newValue) => current * newValue;
      }

      if (runningCalc === null) {
        runningCalc = parseFloat(element)
      }
    });
    return runningCalc
  }

  return (
    <div className="App">
      <div className="inputs">{CalcyState.runningtot}</div>
      <div className="results">{CalcyState.result}</div>
      <div className="flex-grid">
        <div className="colone">
          <div onClick={setRunningTot.bind(null, "7")}>7</div>
          <div onClick={() => setRunningTot("4")}>4</div>
          <div onClick={() => setRunningTot("1")}>1</div>
          <div onClick={() => setRunningTot("0")}>0</div>
        </div>
        <div className="coltwo">
          <div onClick={() => setRunningTot(" ( ")}>(</div>
          <div onClick={() => setRunningTot("8")}>8</div>
          <div onClick={() => setRunningTot("5")}>5</div>
          <div onClick={() => setRunningTot("2")}>2</div>
          <div onClick={() => setRunningTot(".")}>.</div>
        </div>
        <div className="colthree">
          <div onClick={() => setRunningTot(" ) ")}>)</div>
          <div onClick={() => setRunningTot("9")}>9</div>
          <div onClick={() => setRunningTot("6")}>6</div>
          <div onClick={() => setRunningTot("3")}>3</div>
          <div onClick={() => setRunningTot(" ** ")}>EXP</div>
        </div>
        <div className="colfour">
          <div
            onClick={() =>
              setCalcyState(function (oldCalcState) {
                return {
                  runningtot: oldCalcState.runningtot.slice(0, -1), // this is now broken, have to click twice owing to empty spaces
                  result: "",
                };
              })
            }
          >
            DEL
          </div>
          <div onClick={() => setRunningTot(" * ")}>x</div>
          <div onClick={() => setRunningTot(" + ")}>+</div>
          <div
            onClick={() =>
              setCalcyState(function (oldCalcState) {
                return {
                  runningtot: "",
                  result: oldCalcState.runningtot, //sort this
                };
              })
            }
          >
            ANS
          </div>
        </div>
        <div className="colfive">
          <div
            onClick={() =>
              setCalcyState(function (oldCalcState) {
                return {
                  runningtot: "",
                  result: "",
                };
              })
            }
          >
            AC
          </div>
          <div onClick={() => setRunningTot(" / ")}>/</div>
          <div onClick={() => setRunningTot(" - ")}>-</div>
          <div
            onClick={() =>
              setCalcyState(function (oldCalcState) {
                return {
                  runningtot: oldCalcState.runningtot,
                  result: evalReplacement(oldCalcState.runningtot),
                };
              })
            }
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

