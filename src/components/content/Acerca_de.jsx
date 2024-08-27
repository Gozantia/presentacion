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
               <h2>Just another human being</h2>
               <p>Es claro que uno no es solo lo que trabaja, sino como lo hace, es decir la persona que es.</p>
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
                <b>S</b>oy comunicador, diseñador y programador web de Medellín, Colombia.
                </p>
                <p> He trabajado como Community Manager, gestionando redes sociales de marcas, algunas de consumo masivo.
                </p>
                <p>A partir del 2019 me desempeño como diseñador web freelance, donde presto el servicio de  creación, mantenimiento y edición de sitios web en gestores de contenidos como Joomla y especialmente WordPress.
                </p>
                <p>
                En este campo he tenido la oportunidad de desarrollar portales de noticias, sitios web corporativos y tiendas virtuales.
                </p>
                <p>
                Actualmente soy estudiante de Desarrollo Front-end en Academia Geek aprendiendo tecnologías como React JS y todo el entorno de trabajo que representa el desarrollo FrontEnd.
                </p>
                </div>
            </div>
        )
    }
}
