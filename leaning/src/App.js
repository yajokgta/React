import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="numberlist-item">
          </div>
        </div>
          <div>
          <label>กรอกตัวเลข :</label>&nbsp;
          <input type="text" className="number" name="number" id="number"></input>&nbsp;
          <label>บน :</label>&nbsp;
          <input type="text" className="number" name="number" id="number"></input>&nbsp;
          <label>ล่าง :</label>&nbsp;
          <input type="text" className="number" name="number" id="number"></input>&nbsp;
          </div>
          
      </header>
    </div>
  );
}

export default App;
