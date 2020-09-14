import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Acercade from './components/content/Acerca_de'
import Contacto from './components/content/Contacto'
import Trabajos from './components/content/Trabajos'
import Side from './components/Side'
import Fade from 'react-reveal/Fade';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fondo: "verde fondo",
    }
    this.Component1 = this.Component1.bind(this);
    this.Component2 = this.Component2.bind(this);
    this.Component3 = this.Component3.bind(this);
  }
    Component1 = ()=>{ 
      this.setState({ 
        showAcercade:true,
        showTrabajos: false,
        showContacto: false,
        fondo: 'verde fondo'
      }
        );
    }
    Component2 = ()=>{ 
      this.setState(
        {
          showTrabajos: true,
          showAcercade: false,
          showContacto: false,
          fondo: "amarillo fondo"
         }
        );
    }
    Component3 = ()=>{ 
      this.setState(
        { showContacto: true,
          showTrabajos: false,
          showAcercade: false,
          fondo: "rojo fondo"
         }
        );
    }


  render() {
    const { fondo, showAcercade, showTrabajos, showContacto } = this.state;

    return (
      <article className={fondo}>
       
        <header >
           <Fade right>
          <Side />
          </Fade>
        </header>
      
          <section className="contenedor">
          <Fade right>
          {showAcercade && <Acercade/>}
          </Fade>
          {showTrabajos && <Trabajos/>}
          {showContacto && <Contacto/>}
          </section>
        <Navbar Component1={this.Component1}
        Component2={this.Component2}
        Component3={this.Component3}/>
      </article>
    )
  }
}