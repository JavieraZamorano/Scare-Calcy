import './App.css';

function Test() {

  const benny = {
    pet:"dog",
    colour:"white",
    cute: true
  };
/////////////
///////////// Multiple turn
/////////////
/*
for (let prop in benny) {
  console.log( prop ); 
}


/////////////
///////////// Logical opterators
/////////////


let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference


function ChangeName(person){
  let clone = Object.assign({potato: 'tasty'}, person)
  clone.name = "conan"
  return clone;
}

const newPerson = ChangeName(admin)
console.log(newPerson)
console.log(user)
/////////////
///////////// always different 
/////////////

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

/////////////
///////////// Switch
/////////////
// first, declare


function sayHi(name ) {
  alert("Hello "+ name);
};

const greeting = {
  speak: sayHi
}

greeting.speak("Bob")


/////////////
///////////// Function  
///////////// 

let newGreeting = {
  name: "John",
  age: 30,
  sayHi() {
    alert();
  }

};

newGreeting.sayHi()

*/
  return (
    <div className="App">
      <header className="App-header">
        hi
      </header>
    </div>
  );
}

export default Test;
/*

let a = []

for i= 1 to n, i++

if (i%2 !== 0)


let coolnessRatings = {
  Scare: -100,
  Banana: 500,
  Benny: 1000
};

let thing = 0

for (let x in coolnessRatings) {
 thing = thing + coolnessRatings[x];
}

alert(thing);
*/

/*
const counter = {
  current: 0,
  addOne: function() {
    this.current = this.current + 1
    return this.current;
  },
  minusOne: function() {
    this.current = this.current - 1
    return this.current;
  },
  addNumber: function(x) {
    this.current = this.current + x;

    return this.current;
  }

  }

  alert(counter.current);
  counter.addOne();
  alert(counter.current)
  counter.minusOne();
  alert(counter.current);
  counter.addNumber(5);
  alert(counter.current)*/

  function scare(a){
    const b = a+100;
    return b
}


function conan(a){
    let number = a+11;
    const c = scare(number)
    return c
}
const cccc = conan(-11);