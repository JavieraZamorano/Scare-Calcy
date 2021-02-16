import './App.css';
 
function Test() {

  let message;
/////////////
///////////// Object
/////////////

let conan = {};
let scare = new Object();

conan.hair  = "Short";
scare.jumper = "pink"

console.log(conan)

/////////////
///////////// delete 
/////////////

delete scare.jumper

console.log(scare)


/////////////
///////////// create at once
/////////////

const benny = {
  size: "small", 
  colour: "white",
  cute: true,
  "Is he scary?": false
}

console.log(benny.size);
/////////////
///////////// const obj
/////////////


benny.size = "giant"
benny["size"] = "humongous"

///////////// 
///////////// square  
///////////// 

benny["Is he scary?"] = true;

console.log(benny)

let key = "Is he scary?";

benny[key] = true;

console.log(benny)

/////////////
///////////// names
/////////////

  let freshObj = {
    0: "test" 
  };
  console.log(freshObj)
  /////////////
  ///////////// Arrow functions
  /////////////

  const typeOfDog = "size" in benny;
  console.log(typeOfDog);

  const keys1 = Object.keys(benny)
  console.log(keys1);


  //// 
  // create object that contains 

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default Test;
