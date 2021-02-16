import './App.css';
 
function Test() {

/////////////
///////////// Let 
/////////////

let message = 4 > 1;

/////////////
///////////// null
/////////////

// message = null;

/////////////
///////////// undefined 
///////////// 

// message = undefined;

/////////////
///////////// General Variables
/////////////

//  message = 1 + 2; 
//  message = 1 * 2;
//  message = '1' + 2; 
//  message = 2 + '1';
//  message = 2 + '1' + 2;
//  message = 5 >= 4;
//  message = "zpple" > "pineapple";
//  message = "2345" > "33";
//  message = undefined == null;
//  message = undefined === null;
// alert(message)
  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default Test;
