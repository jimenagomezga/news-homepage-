import React from 'react'
import '.././styles/contenido.css';
import { Contentvertical } from '../components/contentvertical'


import Banner from '../images/image-web-3-desktop.jpg';


export const Contenido = () => {
    return (
        <div className="container1">
            <img src={Banner} alt="banner" />
            <Contentvertical />

        </div>

    )
}
