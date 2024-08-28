import React from 'react'
import foto from './imgs/foto_doc.jpg'
function Side (props) {
    const { show1} = props;
    
        return (
            <section>
                <div id="foto" className="grow">
           
                <img src={foto} alt="gozantia" onClick={show1} />
        
                </div>
                <div>
                <h1 onClick={show1}>@Gozantia</h1>
                <small>Santiago Gutiérrez González</small>
                </div>
         
            </section>

        )
    
}
export default Side;
