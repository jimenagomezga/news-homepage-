import React from 'react'
import Banner from '../images/image-web-3-desktop.jpg';
import '.././styles/contenido1.css';

export const Contenido1 = () => {
    return (
        <div>
            <img className="banner" src={Banner} alt="banner" />
            <div className="container2">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="container3">
                    <p>We dive into the next evolution of web that calms to put the power of the platform back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>

            </div >
        </div>
    )
}
