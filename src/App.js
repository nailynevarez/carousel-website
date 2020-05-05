import React, { Component } from 'react';
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
import NailyNevarez from './images/NailyNevarez.png';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeActive: true,
      showAbout: false,
      showText: false,
    };
  }

  handleAboutClick = () => {
    this.setState({
          showAbout: !this.state.showAbout,
          showText: !this.state.showText,
        });
  }

  handleHomeClick = () => {
    this.setState({
          showText: !this.state.showText,
        });

    setTimeout(() => {
        this.setState({
          showAbout: !this.state.showAbout,
        });
      }, 300);

  }

render() {
  return (
    <div className = {this.state.homeActive ? 'fadeIn' : 'fadeOut'}>
    <div className = {this.state.showAbout ? 'opacityDown' : 'opacityUp'}>
    <div className = "Wrapper">
      <div className = "Logo-Wrapper">
        <div className ="Name-Wrapper">
          <img src = {name} onClick={this.handleAboutClick.bind(this)} />
        </div>
        <div className="Trapezoid-Wrapper">
          <a href = "https://www.nailynevarez.com" target="_blank" title = "NAILY NEVAREZ">
            <img src = {shape1}/>
          </a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape2} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape3} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape4} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape5} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape6} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape7} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape8} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape9} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape10} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape11} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape12} /></a>
          <a href = "https://www.nailynevarez.com" target="_blank" ><img src = {shape13} /></a>
        </div>
      </div>
    </div>
    </div>

    {this.state.showAbout ?
      <div className = {this.state.showText ? 'fadeInQuick' : 'fadeOutQuick'}>
      <div className = "About-Wrapper" onClick={this.handleHomeClick.bind(this)}>
      <p>Carousel is the 2019 - 2020 BFA group at the University of Oregon. With 13 members, our work explores a variety of disciplines and concepts. Click on the sections of our logo to see our individual work.</p>
      </div>
      </div>


      : null}

    </div>
  );
}
}
