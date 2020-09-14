import React, { Component } from 'react'

export default class Acerca_de extends Component {
    constructor() {
        super();
        this.state = {
          name: "React" 
        };
      }
    render() {
        return (
            <div className="contenido">
               
                <div className="figura">
                <h3>Carrera</h3>
                <div className="detalle">
                    <div className="trompas">G</div>
                </div>
                <div className="detalle">
                    <div className="trompas">E</div>
                </div>
                <div className="detalle">
                    <div className="trompas">E</div>
                </div>
                <div className="detalle">
                    <div className="trompas">K</div>
                </div>
                </div>
                
                <div className="acercade">
                <p>
                <b>S</b>oy comunicador, diseñador y programador web de Medellín, Colombia. He trabajado con varias agencias de comunicaciones, gestionando las redes sociales de marcas, algunas de ellas de consumo masivo y con un gran volumen de seguidores. También me desempeño como diseñador web freelance, ofreciendo el servicio de  creación, mantenimiento y edición de sitios web en gestores de contenidos como Joomla y especialmente WordPress, teniendo la oportunidad de desarrollar portales de noticias, sitios web corporativos y tiendas virtuales.</p>
                <p>
                Actualmente soy estudiante de Desarrollo Front-end en Academia Geek aprendiendo tecnologías como React JS.
                </p>
                </div>
            </div>
        )
    }
}
