import React from 'react';
import './App.css';
import Donut from './Components/Donut';
import BarChart from './Components/BarChart';

function App() {
  return (
    <div className="App">
      <h1>Charts test</h1>
      <h2>Charts go here...</h2>
      <Donut/>
      <BarChart />
    </div>
  );
}

export default App;
