import logo from './logo.svg';
import './App.css';
var logic = require("./logic.js");
function App() {
  var numberbt = 10;

  var shownumber = <label>{numberbt}</label>
  return (
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
