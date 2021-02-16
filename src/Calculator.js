import './calculator.css';
import { useState } from 'react'; 

function Calculator() {
    const [CalcyState, setCalcyState] = useState(  {runningtot: '', result: ''}  );

    function setRunningTot(a) {
      setCalcyState(function(oldCalcState) {
        return {
          runningtot: oldCalcState.runningtot + a,
          result: oldCalcState.result
        };
      })
    };
    
    return (
        <div className="App">
          <div className="inputs">
            {CalcyState.runningtot}
          </div>
          <div className="results">
            {CalcyState.result}
          </div>
          <div className="flex-grid">
            <div className="colone">          
              <div onClick={setRunningTot.bind(null,'7')}>7
              </div>
              <div onClick={() => setRunningTot(4)}>4
              </div>
              <div onClick={() => setRunningTot(1)}>1
              </div>
              <div onClick={() => setRunningTot(0)}>0
              </div>
            </div>
            <div className="coltwo">
              <div onClick={() => setRunningTot('(')}>(
              </div>          
              <div onClick={() => setRunningTot(8)}>8
              </div>
              <div onClick={() => setRunningTot(5)}>5
              </div>
              <div onClick={() => setRunningTot(2)}>2
              </div>
              <div onClick={() => setRunningTot('.')}>.
              </div>
            </div>
            <div className="colthree">
              <div onClick={() => setRunningTot(')')}>)                    
              </div>
              <div onClick={() => setRunningTot(9)}>9
              </div>
              <div onClick={() => setRunningTot(6)}>6
              </div>
              <div onClick={() => setRunningTot(3)}>3
              </div>
              <div onClick={() => setRunningTot('**')}>EXP
              </div>
            </div>
            <div className="colfour">          
              <div onClick={() => setCalcyState(function(oldCalcState) {
                        return {
                          runningtot: oldCalcState.runningtot.slice(0, -1),
                          result: ''
                        };
                  })}>DEL</div>
              <div onClick={() => setRunningTot('*')}>x
              </div>
              <div onClick={() => setRunningTot('+')}>+
              </div>
              <div onClick={() => setCalcyState(function(oldCalcState) {
                        return {
                          runningtot: '',
                          result: oldCalcState.runningtot
                        };
                  })}>ANS
              </div>
            </div>
            <div className="colfive">          
              <div onClick={() => setCalcyState(function(oldCalcState) {
                        return {
                          runningtot: '',
                          result: ''
                        }
                    })}>AC
              </div>
              <div onClick={() => setRunningTot('/')}>/
              </div>
              <div onClick={() => setRunningTot('-')}>-
              </div>
              <div onClick={() => setCalcyState(function(oldCalcState) {
                        return {
                          runningtot: oldCalcState.runningtot,
                          result: () => {let btest = oldCalcState.runningtot.slice(0,1)
                            if(btest == 0) {
                            oldCalcState.runningtot = btest;
                            } else {
                            oldCalcState.runningtot = oldCalcState.runningtot;
                          }
                          return eval(oldCalcState.runningtot), btest;
                         }                          
                        }
                      })}> =
              </div>
            </div>
          </div>
        </div>
  );
}

export default Calculator;
