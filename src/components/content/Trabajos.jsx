import React, { Component } from 'react'

export default class Trabajos extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
    render() {
        return (
            <div className="contenido">
                <h2>You better werk!</h2>
             <img src="https://media.giphy.com/media/B7YsPcMtLFE5y/giphy.gif" alt="You better" id="gif"/>
             <p>No lucen como el siguiente paso del diseño de interfaces pero es trabajo honesto. <span role="img" aria-label="tromps"> 🤓  </span></p>
             <div className="acercade">
             <a href="https://reto-pokemon.vercel.app/" rel="noopener noreferrer" target="_blank">
                    Reto Pokemón : Soft Pokedex
            </a>
            <p>La exploración del consumo de una API Rest para React JS nunca fue tan divertida. Con mi sobrino que es fanático Pokemón, pasó la prueba. </p>
             <a href="https://gozantia.github.io/lapregonera/" rel="noopener noreferrer" target="_blank">
                    Página tributo: La Pregonera Orquesta
                </a>
            <p>Tener amigos músicos es una bacanería. Por eso en el futuro les haré la página de verdad a cambio de unas buenas serenatas.  </p>
                <a href="https://gozantia.github.io/trompasymotas" rel="noopener noreferrer" target="_blank" >
            <p class="project-title">
                    Página de aterrizaje: Trompas y Motas
            </p>
            </a>
            <p>Trompas y Motas, representa también una idea de negocio aún no muy clara pero con la inspiración absoluta de los perros y gatos queridos. </p>
            <a href="https://gozantia.github.io/ElogiodelaDificultad" rel="noopener noreferrer" target="_blank" >
               <p class="project-title">
               Página de documentación: Elogio de la Dificultad
               </p>
            </a>
            <p>Estar estudiando programación, me ha alejado un poco de la literatura, entre otras cosas. Por eso retomé uno de esos ensayos que me salvó la vida como excusa para hacer el trabajo.</p>

             </div>
            </div>
                
        )
    }
}
