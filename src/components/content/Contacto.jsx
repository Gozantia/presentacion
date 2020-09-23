import React, { Component } from 'react'

export default class Contacto extends Component {
    constructor() {
        super();
        this.state = {
          fondo: "React"
        };
      }
    render() {
        return (
            
            <div className="contenido">
            <h2>Escribeme un mail</h2>
            <p>al correo lordzantiago@gmail.com</p>
            o comunícate conmigo dejándome un mensaje en el <i className="fa fa-whatsapp" ></i><a href="https://wa.link/673dr9">+57 319 525 00 58</a>. 
            </div>
        )
    }
}
