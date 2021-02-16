// import './App.css';
 
// function Test() {
// /*
// Arrays
// Special Object 
// we dont use the key value (but its order is the key)
// ordered list, important. Object not always in the same order depending on what the browser does 
// */

// //How do we create an array

// const arr1 = new Array();
// const arr2 = [];

// const bestPeople = ['Benny', 'Conan', 'Scare', 'Jamie'];

// //alert(bestPeople[0]);
// //alert(bestPeople[1]);

// // Changing the contents
// bestPeople[2] = 'Rickers';
// bestPeople[4] = 'Billy';

// //alert(bestPeople.length);

// // What can we put in an Array - its like an object
// const randomArray = [
//     'Apple',
//     { name: 'John' },
//     true,
//     function() {
//         alert('hello');
//     }
// ];

// // get the object at index 1 and then show its name
// //alert(randomArray[1].name); // John

// // get the function at index 3 and run it

// //common adding removing
// //Pop/Push
// bestPeople.push('your mum')
// //alert(bestPeople)
// //Shift/UnShift

// //it is still an object so we can do all the same stuff

// const fruits = []; // make an array

// fruits[99999] = 5; // assign a property with the index far greater than its length

// fruits.age = 25; // create a property with an arbitrary name

// //but doing this it will takr away the speed benefits
// //you get a special loop, that is faster

// const tastyFruits = ['Apple', 'Orange', 'Plum'];

// // iterates over array elements
// for (let fruit of tastyFruits) {
//     //alert(fruit);
// }

// //Length is quick becuase it is not really counting
// const people = [];
// people[123] = 'Conan';

// //alert(people.length);

// //Arrays can store other arrays like objects
// const matrix = [[1, 2, 3],
//                 [4, 5, [7, 8, 9]]];

// //good for a chessboard game

// //alert(matrix[1][2]); 

// //There are still objects!
// //alert([] == []);
// //alert([0] == [0]);

// //How do we remove Items
// //How would you remove from object
// const lovelyPeople = ['Conan', 'Scare', 'Benny'];

// //delete lovelyPeople[1]; //creates a hole and then length wouldn't work

// //alert(lovelyPeople[1]); //undefined

// //alert(lovelyPeople.length); //3 but it should be 2

// lovelyPeople.splice(1, 1); // from index 1 remove 1 element
// lovelyPeople.splice(2, 0, 'Phil', 'Bob')//adds things to end
// //alert(lovelyPeople)

// // or a simplier
// lovelyPeople.slice(1, 1);

// //Sticking arrays together
// const numberOfKissies = [1000, 100000];

// //alert(numberOfKissies.concat([20, 50]));
// /*
// const nameLength = ['Banana', 'Miss Lentil', 'Sir Benny',{poo: 'big'}].map(item => item.length);
// alert(nameLength);

// 1) 

// 1. Create an array of people with items “Conan” and “Scare”.
// 2. Append “Benny” to the end.
// 3. Replace the value in the middle by “Jamie”.  Your code for finding the middle value should work for any arrays with odd length. Dont just use [1]
// 4. Strip off the first value of the array and alert it.
// 5. Prepend "Billy" and "Ricky" to the array.


// let Scarray = ["Conan","Scare"];

// Scarray.push("Benny");

// const ScarrayLen = Scarray.length;
// const ScIndex = Math.floor(ScarrayLen/2);
// Scarray[ScIndex] = "Jamie"

// alert(Scarray.shift()) //why does this actually change the array? i thought it wouldn't affect it

// Scarray.unshift("Billy","Ricky");
// //alert(Scarray)
// //alert(Scarray.splice(1,1))

// 2)

// let arr = [5, 2, 1, -10, 8];


// let i;
// let arrsub = []


// while (JSON.stringify(arr) !== JSON.stringify(arrsub)){
//     arrsub = arr.slice(0);
//     //alert(arrsub)
//     for (i=0; i<arr.length-1; i++) {
        
//         if(arr[i]>arr[i+1]){
//             arr.splice(i,0,arr.splice(i+1,1));
//         }
//         //alert(i)
//     }
//    // alert(arrsub)

// }
// arr.reverse();

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

// arr.sort()

// //3)

// const conan  = { name: "conan", age: 28, cuteness: 50 };
// const scare = { name: "scare", age: 27, cuteness: 1  };
// const benny = { name: "benny", age: 7, cuteness: 100 };

// const ppl = [ conan, scare, benny ];

// let poo;
// const names = [];
// for (poo = 0; poo < ppl.length; poo++) {
//     names[poo] = ppl[poo].name;
// }

// const woteva = ppl.map(function(pe){return pe.name})
// let names = users.map(item => item.name); //arrow function way
// alert( woteva ); // conan, scare, benny


// //4) HARD!! 

// //Here is an array of colours use a function to return the unique ones.

// function unique(arr) {
//     let j;
//     const newArr = [];

//     for(j = 0; j < arr.length; j++) {
//         if(!newArr.includes(arr[j])) {
//             newArr.push(arr[j]);
//         }
//     }
//     return(newArr)
// }

// for(let j of arr)
// let strings = ["Blue", "Red", "Green", "Red" , "Blue", "Green", "Blue" ];

// alert( unique(strings) ); //I want back ["Blue", "Red", "Green"]*/

// /*/*
// Hints 


// 1. You can store what is already unique and add to it while looping over the whole list
// 2. you can add the list is the loop with push. 

// */
//   return (
//         <div className="App">
//         </div>
//   );
// }

// export default Test;
