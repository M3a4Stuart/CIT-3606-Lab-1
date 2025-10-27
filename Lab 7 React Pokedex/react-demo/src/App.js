import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fallout MTG card index</h1>
        <Fallout name="Alpha Deathclaw" image="Images/Alpha-Deathclaw.png" description="The Alpha Deathclaw is the largest and most powerful of its kind, known for its incredible strength and agility. It is a formidable opponent in the wasteland, often found guarding valuable resources or territories." type="Creature: Lizard Mutant"/>
        <Fallout name="Assaultron Dominator" image="Images/Assaultron-Dominator.png" description="The Assaultron Dominator is a heavily armed and armored variant of the standard Assaultron. Equipped with advanced weaponry and enhanced targeting systems, it serves as a relentless enforcer in the post-apocalyptic world." type="Artifact Creature: Robot"/>
        <Fallout name="Assaultron Invader" image="Images/Assaultron-Invader.png" description="The Assaultron Invader is a swift and deadly combat robot designed for rapid assault missions. Its sleek design and powerful weaponry make it a formidable adversary in any encounter." type="Artifact Creature: Construct"/>
        <Fallout name="General's Enforcer" image="Images/Generals-Enforcer.png" description="Legendary Humans you control have Indestructible" type="Creature: Human Soldier"/>
        <Fallout name="Mr.House" image="Images/Mr-House.png" description="At the heart of New Vegas stands Mr. House, the enigmatic and powerful ruler of the city. With his advanced technology and strategic mind, he commands respect and fear from all who dwell in the wasteland." type="Legendary Artifact Creature: Human"/>
        <Fallout name="Mysterious Stranger" image="Images/Mysterious-Stranger.png" description="The Mysterious Stranger is a enigmatic figure who appears in times of need, often turning the tide of battle with his uncanny skills and precision. His true identity remains unknown, adding to his mystique." type="Creature: Human Rouge"/>
        <Fallout name="T-45 Power Armor" image="Images/T-45-Power-Armor.png" description="The T-45 Power Armor is a robust and versatile suit of armor designed to provide superior protection and enhanced strength to its wearer. It is a common sight among wasteland survivors and military personnel alike." type="Artifact Equipment"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
