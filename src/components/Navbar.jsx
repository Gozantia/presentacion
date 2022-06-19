import React from 'react'

function Navbar(props){
  const { show1, show2,show3} = props;

  return ( 
  <section className="nav">
      <div className="vl"></div>
      <h2>Santiago Gutiérrez González</h2>
      <div className="redes">
      <a
          href="https://github.com/Gozantia"
          rel="noopener noreferrer" target="_blank"
        > <i className="fa fa-github"></i></a>
       <a
          href="https://www.linkedin.com/in/gozantia/"
          rel="noopener noreferrer" target="_blank"
        >
            <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.twitter.com/gozantia/"
          rel="noopener noreferrer" target="_blank"
        >
            <i className="fa fa-twitter"></i>
        </a>
      </div>
      <ul className="nav">
        <li onClick={show1} className="grow">
        Acerca de mi
        </li>
        <li onClick={show2} className="grow">
        Trabajos
        </li>
        <li onClick={show3} className="grow">
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