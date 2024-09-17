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
            <a href="https://www.espiralraiz.com//" rel="noopener noreferrer" target="_blank">
                    Espiral Raíz Danza: Landing page artística 
            </a>
            <p> Hecho en React JS y aún en proceso de mejora y construcción, este sitio web explora la trayectoria del grupo de baile. <br /> Aquí tuve el desafío de realizar un módulo responsivo que cumpliera con tener un video de fondo de Youtube que no afectara la velocidad de carga ni el SEO de la landing page</p>
            <p>Cliente: espiral raiz Danza Experimental</p>
            <p>Mayo de 2024</p>

            <a href="https://babelfreeunion.com/" rel="noopener noreferrer" target="_blank">
                    Babel Free Union : Sitio web corporativo 
            </a>
            <p> Hecho en Wordpress y aún en proceso de mejora y construcción, este sitio web cumple con el encargo y el diseño por parte de la clienta. <br /> Aquí, además del desarrollo tuve la oportunidad de diseñar el logo que actualmente usa la empresa y se encuentra en el header del sitio web </p>
            <p>Clienta: Valentina Macias</p>
            <p>Enero de 2024</p>

            <a href="https://horizonthemedev.com/timeline" rel="noopener noreferrer" target="_blank">
                    Timeline : Componente de tema
            </a>
            <p> Además de trabajar en múltiples sitios web, landing pages y mucho más. En On the Fuze, tuve la oportunidad de aportar módulos cómo éste para presentar información cronológica de forma llamativa. 

            </p>
            <p>Cliente: On the fUZE</p>
            <p>Noviembre de 2023</p>
            <a href="https://isamapas.vercel.app/" rel="noopener noreferrer" target="_blank">
                    Informe ISA:  landing page</a>
            <p>Este es uno de los proyectos que realicé cuando trabajé para Melborp donde tuve la oportunidad de trabajar con marcas grandes y exigentes de nivel internacional como lo es ISA, una operadora  de negocios de Energía Eléctrica </p>
            <p>Cliente: Melborp</p>
            <p>Mayo de 2022</p>
            <a href="https://www.conexionjaguar.org/" rel="noopener noreferrer" target="_blank">
                    Conexión Jaguar: Portal de proyecto 
            </a>
            <p> Realizado con Wordpress, este portal ofrece una gran cantidad de contenidos, secciones, animaciones e interacciones con detalles de una gran calidad y terminación </p>
            <p>Cliente: Melborp</p>
            <p>Enero de 2023</p>
            <a href="https://retrosoultienda.com" rel="noopener noreferrer" target="_blank">
                    RetroSoul Tienda : Tienda online de ropa de segunda Mano
            </a>
            <p>Web E-commerce responsiva para celulares y con optimización SEO. diseñada e implementada 100% por mi </p>
            <p>Clienta: Yudis Rivas</p>
            <p>Agosto de 2020</p>

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
             <a href="https://gozandro.vercel.app//" rel="noopener noreferrer" target="_blank">
                   Gozandro Parker : Sitio Web artístico
            </a>
            <p>Además de mi faceta como desarrollador y comunicador, también soy músico y hace unos años tuve la oportunidad de grabar un disco, por lo que también realicé un pequeño sitio web donde expongo un poco la letra y la razón de ser del sitio web </p>
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
