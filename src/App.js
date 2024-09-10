import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Acercade from './components/content/Acerca_de'
import Contacto from './components/content/Contacto'
import Trabajos from './components/content/Trabajos'
import Home from './components/content/home';
import Side from './components/Side'
import Fade from 'react-reveal/Fade';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fondo: "verde fondo",
      show1: false,
      show2: false,
      show3: false,
      show4: true
    }
    this.show1 = this.show1.bind(this);
    this.show2 = this.show2.bind(this);
    this.show3 = this.show3.bind(this);
    this.show4 = this.show4.bind(this);
  }
  show1() {
    this.setState({ 
      show1:true,
      show2: false,
      show3: false,
      show4: false,
      fondo: 'verde fondo'
     });
  }
  show2() {
    this.setState({ 
      show1:false,
      show2: true,
      show3: false,
      show4: false,
      fondo: 'amarillo fondo'
     });
  }
  show3() {
    this.setState({ 
      show1:false,
      show2: false,
      show3: true,
      show4: false,
      fondo: 'rojo fondo'
     });
  }

  show4() {
    this.setState({ 
      show1:false,
      show2: false,
      show3: false,
      show4: true,
      fondo: 'rojo fondo'
     });
  }

  render() {
    const { fondo, show1, show2, show3, show4} = this.state;

    return (
      <article className={fondo}>
       
        <header >
           <Fade right>
          <Side show1={this.show1} />
         
          </Fade>

          <Fade bottom>
        <Navbar
        show1={this.show1}
        show2={this.show2}
        show3={this.show3}
        show4={this.show4}
        />
        </Fade>
        
        </header>
      
          <section className="contenedor">
          {show1 && <Fade left><Acercade/>
          
          </Fade>}
          
          {show2 && <Fade left>
          <Trabajos/>
          </Fade>
          }
          {show3 &&
          <Fade left>
          <Contacto/>
          </Fade>
          }
                {show4 &&
          <Fade left>
          <Home/>
          </Fade>
          }
          </section>
   
      </article>
    )
  }
}