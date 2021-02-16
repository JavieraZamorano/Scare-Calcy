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
export default Test;/*
//////////////////////////////////////////////////////////////////////////////////
///////////////// PART 1 /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/// What are the messages when each of these are run? What do they mean? 
let conan = {};
conan.whatIsMyCoolnessRating();
//this is a type error: conan.whatIsMyCoolnessRating() isn't a function. The () brackets make it seem
//like it should be a function
//also conan is an object and it isn't filled anywhere so conan's coolness rating is nonexistent



let scare = {};
scare.hair.colour = "bar";
//this is a nested object (i read it on the internet) and you often get cannot get property of undefined
//errors in this case
//but here the error is cannot set property of undefined which is when you're trying to assign a value to
//something which is a different type
//in this case scare is an object, but then hair hasn't been defined anywhere, so when you try to set its
//property colour to "bar" it fails with this error
//also what colour is bar anyway

//////////////////////////////////////////////////////////////////////////////////
///////////////// PART 2 /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/// What is wrong with me you don't wanna know sir xxx
for(let i=0; i > 5; i++){
  console.log(i);
}
//this will never run, because the condition for it running is that i be greater than 5, but i is set to 0


//////////////////////////////////////////////////////////////////////////////////
///////////////// PART 3 /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/// ReWrite me with a ternary (?) instead of the if else 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return alert('Did parents allow you?');
  }
}

function checkAge(age) {
  return (age > 18 ? true : alert('Did parents allow you?'));
}

const myAge = checkAge(15)

//////////////////////////////////////////////////////////////////////////////////
///////////////// PART 4 /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
Write the code, one line for each action:

1.) Create an empty object conan.
2.) Add the property handsomeness with the value 100.
3.) Add the property beautifulness with the value 1000000.
4.) Change the value of the handsomeness to 200.
5.) Remove the property beautifulness from the object.


let conan = {};
conan.handsomeness = 100;
conan.beautifulness= 1000000;
conan.handsomeness = 200;
delete conan.beautifulness;

const mynumber= 1.23456;

const tostring = mynumber.toString(10)
ALERT*/