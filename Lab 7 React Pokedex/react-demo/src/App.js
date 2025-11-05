import logo from './logo.svg';
import './App.css';
import React from 'react';

function Fallout(props) {
  return (
    <div className="fallout-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} className="fallout-image" />
      <p><strong>description:</strong> {props.description}</p>
      <p><strong>type:</strong> {props.type}</p>
      <p><strong>ability:</strong> {props.ability}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fallout MTG card index</h1>
        <div class = "fallout-card-container">
        <Fallout name="Alpha Deathclaw" image="Images/Alpha-Deathclaw.png" description="The Alpha Deathclaw is the largest and most powerful of its kind, known for its incredible strength and agility. It is a formidable opponent in the wasteland, often found guarding valuable resources or territories." type="Creature: Lizard Mutant" ability="When Alpha deathclaw enters battlefield or becomes monstrous, destroy target permanent"/>
        </div>
        <div class = "fallout-card-container">
        <Fallout name="Assaultron Invader" image="Images/Assaultron-Invader.png" description="The Assaultron Invader is a swift and deadly combat robot designed for rapid assault missions. Its sleek design and powerful weaponry make it a formidable adversary in any encounter." type="Artifact Creature: Construct" ability="Assaultron Invader enters battlefield with X+1/+1 counters on. Put a +1/+1 counter on Assaultron Invader. Remove a +1/+1 counter from Assaultron Invader: it deals 1 damage to any target."/>
        </div>
        <div class = "fallout-card-container">
        <Fallout name="Mysterious Stranger" image="Images/Mysterious-Stranger.png" description="The Mysterious Stranger is a enigmatic figure who appears in times of need, often turning the tide of battle with his uncanny skills and precision. His true identity remains unknown, adding to his mystique." type="Creature: Human Rouge" ability="When mysterious Stranger enters the battlefield, for each graveyard with instant or scorcery card in it, exile target instant or scorcery card from that graveyard. If two or more cards are exiled this way chose one of them at random and copy it. You may cast the copy without paying its mana cost."/>
        </div>
        <div class = "fallout-card-container">
        <Fallout name="T-45 Power Armor" image="Images/T-45.png" description="The T-45 Power Armor is a robust and versatile suit of armor designed to provide superior protection and enhanced strength to its wearer. It is a common sight among wasteland survivors and military personnel alike." type="Artifact Equipment" ability="When T-45 Power Armor enters the battlefield you get two energy counters. Equipped creature get +3/+3 and dosen't untap during it's controller's untap step. at the beginning of your upkeep, you may pay 1 energy counter. If you do, untap equipped creature, then put your choice of a menace, trample, or lifelink counter on it. Equipe 3."/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
