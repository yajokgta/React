import './App.css';
import { useState } from "react";


function App() {
<<<<<<< HEAD

  var numberbt = 20;
=======
  var numberbt = 10;
>>>>>>> e0dff9be20e6a765cd5efb59c11728a5b668353b

  var shownumber = <label>{numberbt}</label>
  return (
    //testing
    //testing
    <div className="App">
      <header className="App-header">
        <div>
          <div className="numberlist-item">
            <h1>{shownumber}</h1>
            
          </div>
          </div>
          <div>
          <label>กรอกตัวเลข :</label>&nbsp;
          <input type="text" className="number" name="number" id="number"></input>&nbsp;
          <label>บน :</label>&nbsp;
          <input type="text" className="number" name="bon" id="bon"></input>&nbsp;
          <label>ล่าง :</label>&nbsp;
          <input type="text" className="number" name="lang" id="bon"></input>&nbsp;
          </div>
      </header>
    </div>
    
  );
}

export default App;
