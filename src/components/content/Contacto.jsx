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
            <h2>Antes de irte</h2>
            Y si consideras menester, comunícate conmigo dejándome un mensaje en <a href="https://wa.link/673dr9" id="whatsapp"><i className="fa fa-whatsapp"></i> </a> y que gracias. 
            </div>
        )
    }
}
