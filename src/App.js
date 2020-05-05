import React from 'react';
import name from './images/name.png';
import shape1 from './images/shape.png';
import shape2 from './images/shape.png';
import shape3 from './images/shape.png';
import shape4 from './images/shape.png';
import shape5 from './images/shape.png';
import shape6 from './images/shape.png';
import shape7 from './images/shape.png';
import shape8 from './images/shape.png';
import shape9 from './images/shape.png';
import shape10 from './images/shape.png';
import shape11 from './images/shape.png';
import shape12 from './images/shape.png';
import shape13 from './images/shape.png';
import './App.css';

function App() {
  return (
    <div className = "Wrapper">
      <div className = "Logo-Wrapper">
        <div className ="Name-Wrapper">
          <img src = {name} />
        </div>
        <div className="Trapezoid-Wrapper">
          <img src = {shape1} />
          <img src = {shape2} />
          <img src = {shape3} />
          <img src = {shape4} />
          <img src = {shape5} />
          <img src = {shape6} />
          <img src = {shape7} />
          <img src = {shape8} />
          <img src = {shape9} />
          <img src = {shape10} />
          <img src = {shape11} />
          <img src = {shape12} />
          <img src = {shape13} />
        </div>
      </div>
    </div>
  );
}

export default App;
