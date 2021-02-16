// import './App.css';
 
// function Test() {
//     //Desturcturing features
//     const person = ["Conan", "Malanaphy"]

//     const [firstName, surname] = person;

//     //the same as before 
//     const firstName = person[0];

//     const surname = person[1];

//     const [firstName, surname] = "Conan Malanaphy".split(' ');

//     let [name1, name2, ...rest] = ["Conan", "Scare", "Benny", "Cecil"];


//     //Object destructuring
//     //need to know exactly what the keys are going to be
//     let conan = {
//       manliness: 100,
//       sexiness: 100,
//       awesomeness: 200
//     };
//     let {manliness, sexiness, awesomeness} = conan;

//     //Deeply nested destructuring of object
//     let options = {
//       size: {
//         width: 100,
//         height: 200
//       },
//       items: ["Cake", "Donut"],
//       extra: true
//     };

//     // destructuring assignment split in multiple lines for clarity
//     let {
//       size: { // put size here
//         width,
//         height
//       },
//       items: [item1, item2], // assign items here
//       title = "Menu" // not present in the object (default value is used)
//     } = options;

//     //defaults
//     function calculator(a,b,x=1) {
//         return((a+b)*x);
//     }

// const addition = calculator(1,2); //annoying to type 1 always so type x==1 up there to give it a default value
// const multiplication = calculator(1,2,3);




//   return (
//         <div className="App">
//         </div>
//   );
// }

// export default Test;
