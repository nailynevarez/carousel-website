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
      isHover1: false,
      isHover2: false,
      isHover3: false,
      isHover4: false,
      isHover5: false,
      isHover6: false,
      isHover7: false,
      isHover8: false,
      isHover9: false,
      isHover10: false,
      isHover11: false,
      isHover12: false,
      isHover13: false,
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
          <a href = "https://www.google.com" target="_blank" title = "NAILY NEVAREZ">
            <img className = "Shape1" src = {shape1} onMouseEnter={() => this.setState({ isHover1: true})}
        onMouseLeave={() => this.setState({ isHover1: false})}/>
          </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape2" src = {shape2} onMouseEnter={() => this.setState({ isHover2: true})}
            onMouseLeave={() => this.setState({ isHover2: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape3" src = {shape3} onMouseEnter={() => this.setState({ isHover3: true})}
            onMouseLeave={() => this.setState({ isHover3: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape4"src = {shape4} onMouseEnter={() => this.setState({ isHover4: true})}
            onMouseLeave={() => this.setState({ isHover4: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape5" src = {shape5} onMouseEnter={() => this.setState({ isHover5: true})}
            onMouseLeave={() => this.setState({ isHover5: false})} />
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape6"src = {shape6} onMouseEnter={() => this.setState({ isHover6: true})}
            onMouseLeave={() => this.setState({ isHover6: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape7" src = {shape7} onMouseEnter={() => this.setState({ isHover7: true})}
            onMouseLeave={() => this.setState({ isHover7: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape8" src = {shape8} onMouseEnter={() => this.setState({ isHover8: true})}
            onMouseLeave={() => this.setState({ isHover8: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape9" src = {shape9} onMouseEnter={() => this.setState({ isHover9: true})}
            onMouseLeave={() => this.setState({ isHover9: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape10"src = {shape10} onMouseEnter={() => this.setState({ isHover10: true})}
            onMouseLeave={() => this.setState({ isHover10: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape11" src = {shape11} onMouseEnter={() => this.setState({ isHover11: true})}
            onMouseLeave={() => this.setState({ isHover11: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape12" src = {shape12} onMouseEnter={() => this.setState({ isHover12: true})}
            onMouseLeave={() => this.setState({ isHover12: false})}/>
            </a>
          <a href = "https://www.google.com" target="_blank" >
          <img className = "Shape13" src = {shape13} onMouseEnter={() => this.setState({ isHover13: true})}
            onMouseLeave={() => this.setState({ isHover13: false})}/>
            </a>
        </div>
      </div>
      <div className = "Artist-Wrapper">
      {this.state.isHover1 && <p className = "Name1">NAILY NEVAREZ</p>}
      {this.state.isHover2 && <p className = "Name1">THOMAS NEWLANDS</p>}
      {this.state.isHover3 && <p className = "Name1">WREN MASON-BLAUG</p>}
      {this.state.isHover4 && <p className = "Name1">GEORDI HELMICK</p>}
      {this.state.isHover5 && <p className = "Name1">MARCELLA ROSEN</p>}
      {this.state.isHover6 && <p className = "Name1">ELIJAH ROTH</p>}
      {this.state.isHover7 && <p className = "Name1">PHOEBE MALLORY</p>}
      {this.state.isHover8 && <p className = "Name1">OLIVIA DENTON</p>}
      {this.state.isHover9 && <p className = "Name1">FELIX NEELEMAN</p>}
      {this.state.isHover10 && <p className = "Name1">MYA CLOVER-OWENS</p>}
      {this.state.isHover11 && <p className = "Name1">JOSH ROLLO</p>}
      {this.state.isHover12 && <p className = "Name1">CULLEN SHARP</p>}
      {this.state.isHover13 && <p className = "Name1">KYLE NELSON</p>}
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
