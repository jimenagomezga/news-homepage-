import React from 'react'
import '.././styles/contenido2.css';
import ImageRetros from '../images/image-retro-pcs.jpg'
import ImageLaptos from '../images/image-top-laptops.jpg'
import ImageGaming from '../images/image-gaming-growth.jpg'


export const Contenido2 = () => {
    return (
        <div className="container">

            <div className="container_block">
                <img src={ImageRetros} alt='imageretro'></img>
                <div className="container_text">
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What Happen when old PCs are given modern upgrades?</p>
                </div>

                <div className="container_block">
                    <img src={ImageLaptos} alt='imageretro'></img>
                    <div className="container_text">
                        <h1>02</h1>
                        <h2>Top 10 Laptops of 2022</h2>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="container_block">
                    <img src={ImageGaming} alt='imageretro'></img>
                    <div className="container_text">
                        <h1>03</h1>
                        <h2>The Growth of Gaming</h2>
                        <p>How the pandemic has sparked fresh oppotunities.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
