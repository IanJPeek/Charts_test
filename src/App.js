import React from 'react';
import './App.css';
import Donut from './Components/Donut';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';

function App() {
  return (
    <div className="App">
      <h1>Charts test</h1>
      <h2>Charts go here...</h2>
      <Donut/>
      <BarChart />
      <LineChart />
    </div>
  );
}

export default App;
