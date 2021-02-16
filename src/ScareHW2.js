import './App.css';

function Test() {
return (
  <div className="App">
    <header className="App-header">
      hi
    </header>
  </div>
);
}
export default Test;

/*1) 
  I want to remove the money symbol from the string. 
  Create a function that takes in the string and then gives out the a number without it :D
  extractCurrencyValue('£120') === 120   these should be true

  function extractCurrencyValue(munny) {
      let currency = munny.substring(2,4);
      return currency
  }
  function extractCurrencyValue(munny) {
      let currency = parseInt(munny, 10)
      return currency
  
function extractCurrencyValue(munny) {
    let currency = munny.replace("£","");
    return currency
}

function extractCurrencyValue(munny) {

    let start = munny.slice(0,1);
    let end = munny.slice(-1);

    if (isNaN(start)) {
        return munny.slice(1);
    }
    else if (isNaN(end)) {
        return munny.slice(0,-1);
    }
}

  alert(extractCurrencyValue('$12345678'));
*/
  /*2)  
  Create a function takes in how many kissies conan has given scare and how many kissies scare has given conan round them up also return the sum of them together. 
  kissyCount(1230, 543) should return {conan: 2000, scare:600, total: 2600}        <-- Conan did most kissies.*/
function kissyCount(conanKissy,scareKissy){
  let kissyObject = {};

  let cKissyLength = conanKissy.toString().length - 1;
  let cDivide = 10**cKissyLength;
  kissyObject.conan = (Math.ceil(conanKissy/cDivide))*cDivide;

  let sKissyLength = scareKissy.toString().length - 1;
  let sDivide = 10**sKissyLength;
  kissyObject.scare = (Math.ceil(scareKissy/sDivide))*sDivide;
  
  kissyObject.total = kissyObject.conan + kissyObject.scare;

  return ({
    conan: kissyObject.conan,
    scare: kissyObject.scare,
    total: kissyObject.total
  })
}

alert(JSON.stringify(kissyCount(1230,543)))
