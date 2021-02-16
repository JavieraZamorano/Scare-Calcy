import './App.css';
 
function Test() {

  /////////////
  ///////////// Let 
  /////////////

  // let message;

  // message = 'bye';

  /////////////
  ///////////// Const
  /////////////

  // const message = "hi"

  // message = "bye"

  /////////////
  ///////////// multiple 
  ///////////// 

  let a = 1,
      b = 2, 
      c = 3;

  /////////////
  ///////////// Passing Variables
  /////////////

  // let hello = 'Hello world!';

  // let message;

  // message = hello;

  // alert(hello); 
  // alert(message); 

  /////////////
  ///////////// Multi assign 
  /////////////

  let conan = "funny" + "cool";

  return (
    <div className="App">
      <header className="App-header">
        {conan}
      </header>
    </div>
  );
}

export default Test;
