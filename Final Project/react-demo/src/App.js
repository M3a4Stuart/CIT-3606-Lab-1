import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Power Armor index</h1>
      </header>

      <div className="armor-list">
        <h2>T-45 Power Armor</h2>
        <img src="images/T45A PA.jpg" alt="t45" />
        <p>Damge Resitance: 500</p>
        <p>Energy Resitance: 310</p>
        <p>Radiation Resitance: 1050</p>
        <p>Total Durability: 450</p>
        <p>weight: 92</p>
        <p>Repair Cost: Steel: 27, Circuitry: 1</p>
      </div>
      <div className="armor-list">
        <h2>T-51 Power Armor</h2>
      <img src="images/T51B PA.jpg" alt="t51" />
        <p>Damage Resitance: 740</p>
        <p>Energy Resitance: 490</p>
        <p>Radiation Resitance: 1300</p>
        <p>Total Durability: 720</p>
        <p>weight: 102</p>
        <p>Repair Cost: Steel: 33, Aluminum: 1, Circuitry: 1</p>        
        </div>
      <div className="armor-list">
        <h2>T-60 Power Armor</h2>
      <img src="images/T60 PA.jpg" alt="t60" />
        <p>Damage Resitance: 980</p>
        <p>Energy Resitance: 650</p>
        <p>Radiation Resitance: 1250</p>
        <p>Total Durability: 900</p>
        <p>weight: 110</p>
        <p>Repair Cost: Steel: 40, Plastic: 8, Aluminum: 8, Circuitry: 1</p>
      </div>
      <div className="armor-list">
        <h2>T-65 Power Armor</h2>
      <img src="images/T65 PA.jpg" alt="t65" />
        <p>Damage Resitance: 1200</p>
        <p>Energy Resitance: 800</p>
        <p>Radiation Resitance: 1500</p>
        <p>Total Durability: 1100</p>
        <p>weight: 120</p>
        <p>Repair Cost: Aluminum: 90, Black Titanium: 60, CircitryL: 14, Gears: 45 Glass: 17, Nuclear Material: 56, Oil
          :80, Plastic: 40 Rubber: 90, Screws: 84, Silver: 30, Steel: 156</p>
        </p>
      </div>
    </div>
  );
}

export default App;
