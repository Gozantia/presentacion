import React from 'react'

function Navbar(props){
  const { Component1,Component2, Component3} = props;

  return ( 
  <section className="nav">
      <div className="vl"></div>
      <h2>Santiago Gutiérrez</h2>
      <div className="redes">
      <a
          href="https://github.com/Gozantia"
          without
          rel="noopener noreferrer" target="_blank"
        > <i class="fa fa-github"></i></a>
       <a
          href="https://www.linkedin.com/in/gozantia/"
          without
          rel="noopener noreferrer" target="_blank"
        >
            <i class="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.twitter.com/gozantia/"
          without
          rel="noopener noreferrer" target="_blank"
        >
            <i class="fa fa-twitter"></i>
        </a>
      </div>
      <ul>
        <li onClick={Component1}>
        Acerca de mi
        </li>
        <li onClick={Component2}>
        Trabajos
        </li>
        <li onClick={Component3}>
        Contacto
        </li>
      </ul>

    </section>
  )
}

export default Navbar;
        
    
/* <button onClick={this.hideComponent("showHideTrabajos")}>
                    Trabajos
                  </button>
                  <button onClick={this.hideComponent("showHideContacto")}>
                    Contacto
                  </button> */