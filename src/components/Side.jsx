import React from 'react'
import foto from './imgs/image.png'
function Side (props) {
    const { show1} = props;
    
        return (
            <section>
                <div id="foto">
                <img src={foto} onClick={show1} alt="gozantia"/>
                </div>
            </section>

        )
    
}
export default Side;
