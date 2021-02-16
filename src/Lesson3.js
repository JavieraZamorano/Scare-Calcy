import './App.css';
 
function Test() {

  let message;
/////////////
///////////// Multiple turn
/////////////

//  let age = prompt('age?', 18);

//  message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );


/////////////
///////////// Logical opterators
/////////////

// alert( null || 2 || undefined );

alert( 1 && null && 2 );

/////////////
///////////// For loop 
/////////////

// for (let i = 0; i < 3; i++) { 
//   alert(i);
// }

/////////////
///////////// Switch
/////////////

// let a = 2 + 2;

// switch (a) {
//   case 3:
//   case 6:
//     alert( 'Too small' );
  
//   case 4:
//     alert( 'Exactly!' );
  
//   case 5:
//     alert( 'Too large' );
   
//   default:
//     alert( "I don't know such values" );
// }

/////////////
///////////// Function  
///////////// 

// Create a function that passes in 2 numbers and returns the minimum of 2 numbers;

// let numbers = function (no1,no2) {
//   let min;
//   if (no1 > no2) {
//     min = no2;
//   }
//   else {
//     min = no1;
//   }
//   return min
// }
// alert(numbers(3,6))
/////////////
///////////// HOF
/////////////

  // function ask(question, yes, no) {
  //   let ruestion = window.confirm(question);

  //   if (ruestion){
  //     yes()
  //   } 
  //   else{ 
  //     no()
  //   };
  // }

  // function showOk() {
  //   alert( "You agreed." );
  // }

  // function showCancel() {
  //   alert( "You canceled the execution." );
  // }

  // ask("Do you agree?", showOk, showCancel);




  /////////////
  ///////////// Arrow functions
  /////////////

  // let sum = (a, b) => a + b;

  // let oldsum = function(a, b) {
  //   return a + b;
  // };
  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default Test;
