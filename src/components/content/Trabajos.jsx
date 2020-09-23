import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Trabajos extends Component {

    render() {
        return (
        <div className="contenido">
            <h2>You better werk!</h2>
             <img src="https://media.giphy.com/media/B7YsPcMtLFE5y/giphy.gif" alt="You better" id="gif"/>
             <p>No lucen como el siguiente paso del diseño de interfaces pero es trabajo honesto. <span role="img" aria-label="tromps"> 🤓  </span></p>
             <Tabs>
             <TabList>
             <Tab>Clientes reales</Tab>
            <Tab>Ejercicios Front-end</Tab>
            </TabList>
            <TabPanel>
            <div className="acercade">
            <a href="https://retrosoultienda.com" rel="noopener noreferrer" target="_blank">
                    RetroSoul Tienda : Tienda online de ropa de segunda Mano
            </a>
            <p>Web E-commerce responsiva para celulares y con optimización SEO. </p>
            <p>Clienta: Yudis Rivas</p>
            <p>Agosto de 2020</p>
            <a href="http://afrocine.revistaviveafro.com/" rel="noopener noreferrer" target="_blank">
                    Afrocine : Historia de la diáspora
            </a>
            <p> Landing Page para el especial periodístico del Quibdó África Film Festival </p>
            <p>Cliente: Revista Vive Afro</p>
            <p>Septiembre de 2020</p>
            <a href="http://emprende.revistaviveafro.com/" rel="noopener noreferrer" target="_blank">
                    Emprende Afro: ¡Impulsa tu proyecto emprendedor! </a>
            <p>con servicios descargables dirigida a emprendedores afro, que se complementa con un directorio de empresas que se puede encontrar en el portal de la corporación.</p>
            <p>Cliente: Revista Vive Afro</p>
            <p>Enero de 2020</p>
            <a href="http://revistaviveafro.com/" rel="noopener noreferrer" target="_blank">
                    Revista ViveAfro: Portal especializado en temáticas afrocolombianas 
            </a>
            <p> Rediseño y actualización del CMS del portal de contenidos de la corporación</p>
            <p>Cliente: Vanessa Márquez, directora Revista Vive Afro</p>
            <p>Enero de 2020</p>
            <a href="http://hagalau.net/" rel="noopener noreferrer" target="_blank">
                    HagalaU: ¡No pase de largo!
            </a>
            <p>Diseño, montaje y mantenimiento del portal de noticias, con más de 2000 artículos en línea y 5 mil visitas mensuales en promedio</p>
            <p>Cliente: Santiago Arango</p>
            <p>Desde de 2014 a la actualidad</p>
            </div>
            </TabPanel>
            <TabPanel>
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
            <p className="project-title">
                    Página de aterrizaje: Trompas y Motas
            </p>
            </a>
            <p>Trompas y Motas, representa también una idea de negocio aún no muy clara pero con la inspiración absoluta de los perros y gatos queridos. </p>
            <a href="https://gozantia.github.io/ElogiodelaDificultad" rel="noopener noreferrer" target="_blank" >
               <p className="project-title">
               Página de documentación: Elogio de la Dificultad
               </p>
            </a>
            <p>Estar estudiando programación, me ha alejado un poco de la literatura, entre otras cosas. Por eso retomé uno de esos ensayos que me salvó la vida como excusa para hacer el trabajo.</p>

             </div>
            </TabPanel>
             </Tabs>
             
        </div>
                
        )
    }
}
