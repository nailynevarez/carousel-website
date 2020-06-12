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
      isHover1m: false,
      isHover2m: false,
      isHover3m: false,
      isHover4m: false,
      isHover5m: false,
      isHover6m: false,
      isHover7m: false,
      isHover8m: false,
      isHover9m: false,
      isHover10m: false,
      isHover11m: false,
      isHover12m: false,
      isHover13m: false,
    };
  }


  componentDidMount(){
  setTimeout(() => {
    this.setState({
      isHover1m: !this.state.isHover1m,
    });
    this.loopNames();
    }, 500);
}

loopNames = () => {
  setTimeout(() => {
      this.setState({
        isHover1m: !this.state.isHover1m,
        isHover2m: !this.state.isHover2m,
      });
    }, 1500);

    setTimeout(() => {
        this.setState({
          isHover2m: !this.state.isHover2m,
          isHover3m: !this.state.isHover3m,
        });
      }, 3000);

      setTimeout(() => {
          this.setState({
            isHover3m: !this.state.isHover3m,
            isHover4m: !this.state.isHover4m,
          });
        }, 4500);

      setTimeout(() => {
          this.setState({
            isHover4m: !this.state.isHover4m,
            isHover5m: !this.state.isHover5m,
          });
        }, 6000);

      setTimeout(() => {
          this.setState({
            isHover5m: !this.state.isHover5m,
            isHover6m: !this.state.isHover6m,
          });
        }, 7500);

      setTimeout(() => {
          this.setState({
            isHover6m: !this.state.isHover6m,
            isHover7m: !this.state.isHover7m,
          });
        }, 9000);

      setTimeout(() => {
          this.setState({
            isHover7m: !this.state.isHover7m,
            isHover8m: !this.state.isHover8m,
          });
        }, 10500);
      setTimeout(() => {
          this.setState({
            isHover8m: !this.state.isHover8m,
            isHover9m: !this.state.isHover9m,
          });
        }, 12000);

      setTimeout(() => {
          this.setState({
            isHover9m: !this.state.isHover9m,
            isHover10m: !this.state.isHover10m,
          });
        }, 13500);

      setTimeout(() => {
          this.setState({
            isHover10m: !this.state.isHover10m,
            isHover11m: !this.state.isHover11m,
          });
        }, 15000);
      setTimeout(() => {
          this.setState({
            isHover11m: !this.state.isHover11m,
            isHover12m: !this.state.isHover12m,
          });
        }, 16500);

      setTimeout(() => {
          this.setState({
            isHover12m: !this.state.isHover12m,
            isHover13m: !this.state.isHover13m,
          });
        }, 18000);

        setTimeout(() => {
            this.setState({
              isHover13m: !this.state.isHover13m,
              isHover1m: !this.state.isHover1m,
            });
            this.loopNames();
          }, 19500);
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
          <a href = "https://www.nailynevarez.com/" target="_blank" title = "NAILY NEVAREZ">
            <img className = "Shape1" src = {shape1} onMouseEnter={() => this.setState({ isHover1: true})}
        onMouseLeave={() => this.setState({ isHover1: false})}/>
          </a>
          <a href = "http://www.thnewlands.com/" target="_blank" title="THOMAS NEWLANDS" >
          <img className = "Shape2" src = {shape2} onMouseEnter={() => this.setState({ isHover2: true})}
            onMouseLeave={() => this.setState({ isHover2: false})}/>
            </a>
          <a href = "https://www.wrenmb.com/" target="_blank" title="WREN MASON-BLAUG">
          <img className = "Shape3" src = {shape3} onMouseEnter={() => this.setState({ isHover3: true})}
            onMouseLeave={() => this.setState({ isHover3: false})}/>
            </a>
          <a href = "https://www.geordihelmick.com/" target="_blank" title="GEORDI HELMICK" >
          <img className = "Shape4"src = {shape4} onMouseEnter={() => this.setState({ isHover4: true})}
            onMouseLeave={() => this.setState({ isHover4: false})}/>
            </a>
          <a href = "https://marcellarosen.com/" target="_blank" title="MARCELLA ROSEN" >
          <img className = "Shape5" src = {shape5} onMouseEnter={() => this.setState({ isHover5: true})}
            onMouseLeave={() => this.setState({ isHover5: false})} />
            </a>
          <a href = "https://elijahroth.com/" target="_blank" title="ELIJAH ROTH" >
          <img className = "Shape6"src = {shape6} onMouseEnter={() => this.setState({ isHover6: true})}
            onMouseLeave={() => this.setState({ isHover6: false})}/>
            </a>
          <a href = "https://mazitdynasty.com" target="_blank" title = "PHOEBE MALLORY">
          <img className = "Shape7" src = {shape7} onMouseEnter={() => this.setState({ isHover7: true})}
            onMouseLeave={() => this.setState({ isHover7: false})}/>
            </a>
          <a href = "https://odtbee.myportfolio.com/" target="_blank" title="OLIVIA DENTON">
          <img className = "Shape8" src = {shape8} onMouseEnter={() => this.setState({ isHover8: true})}
            onMouseLeave={() => this.setState({ isHover8: false})}/>
            </a>
          <a href = "https://www.felixneeleman.com/" target="_blank" title="FELIX NEELEMAN">
          <img className = "Shape9" src = {shape9} onMouseEnter={() => this.setState({ isHover9: true})}
            onMouseLeave={() => this.setState({ isHover9: false})}/>
            </a>
          <a href = "https://www.myaclover.com/" target="_blank" title="MYA CLOVER">
          <img className = "Shape10"src = {shape10} onMouseEnter={() => this.setState({ isHover10: true})}
            onMouseLeave={() => this.setState({ isHover10: false})}/>
            </a>
          <a href = "https://www.joshrollo.com" target="_blank" title="JOSH ROLLO" >
          <img className = "Shape11" src = {shape11} onMouseEnter={() => this.setState({ isHover11: true})}
            onMouseLeave={() => this.setState({ isHover11: false})}/>
            </a>
          <a href = "https://www.cullensharp.info/" target="_blank" title = "CULLEN SHARP">
          <img className = "Shape12" src = {shape12} onMouseEnter={() => this.setState({ isHover12: true})}
            onMouseLeave={() => this.setState({ isHover12: false})}/>
            </a>
          <a href = "https://www.knillustrations.com" target="_blank" title="KYLE NELSON">
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
      {this.state.isHover10 && <p className = "Name1">MYA CLOVER</p>}
      {this.state.isHover11 && <p className = "Name1">JOSH ROLLO</p>}
      {this.state.isHover12 && <p className = "Name1">CULLEN SHARP</p>}
      {this.state.isHover13 && <p className = "Name1">KYLE NELSON</p>}
      </div>
      <div className = "Artist-Wrapper-Mobile">
      {this.state.isHover1m && <p className = "Name1">NAILY NEVAREZ</p>}
      {this.state.isHover2m && <p className = "Name1">THOMAS NEWLANDS</p>}
      {this.state.isHover3m && <p className = "Name1">WREN MASON-BLAUG</p>}
      {this.state.isHover4m && <p className = "Name1">GEORDI HELMICK</p>}
      {this.state.isHover5m && <p className = "Name1">MARCELLA ROSEN</p>}
      {this.state.isHover6m && <p className = "Name1">ELIJAH ROTH</p>}
      {this.state.isHover7m && <p className = "Name1">PHOEBE MALLORY</p>}
      {this.state.isHover8m && <p className = "Name1">OLIVIA DENTON</p>}
      {this.state.isHover9m && <p className = "Name1">FELIX NEELEMAN</p>}
      {this.state.isHover10m && <p className = "Name1">MYA CLOVER</p>}
      {this.state.isHover11m && <p className = "Name1">JOSH ROLLO</p>}
      {this.state.isHover12m && <p className = "Name1">CULLEN SHARP</p>}
      {this.state.isHover13m && <p className = "Name1">KYLE NELSON</p>}
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
