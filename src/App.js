import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {name:"Dr. Mahfuz", profession:"Singer"};
  let person2 = {name:"Eva Rahman", profession:"Kokil Konthi"};
  let style = {
    color:'red',
    backgroundColor:'gray'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{backgroundColor:'lightblue', color:'gray'}}>My Heading {person.name + " " + person.profession}</h1>
        <h3 style={style} >Singer: {person2.name + " " + person2.profession}</h3>
        <p>My Frist Script React</p>
      </header>
    </div>
  );
}

export default App;
