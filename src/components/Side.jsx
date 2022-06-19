import React from 'react'
import foto from './imgs/image.png'
function Side (props) {
    const { show1} = props;
    
        return (
            <section>
                <div id="foto" className="grow">
                <li onClick={show1}>
                <img src={foto} alt="gozantia"/>
                </li>
                </div>
                <h2>Santiago Gutiérrez González</h2>
            </section>

        )
    
}
export default Side;
