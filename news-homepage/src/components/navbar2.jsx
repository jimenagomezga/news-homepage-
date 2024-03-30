import React from 'react'
import '.././styles/navbar2.css';
import Logo from '../images/logo.svg';


export const Navbar2 = () => {
    return (
        <div>

            <header>
                <img src={Logo} alt="logoimg" class="logo" />
                <input type="checkbox" name="" id="btn-menu" class="custom-checkbox" />
                <label for="btn-menu" class="label-burger">
                    <div class="container-burger">
                        <div class="linea linea-top"></div>
                        <div class="linea linea-med"></div>
                        <div class="linea linea-low"></div>
                    </div>
                </label>
                <nav>
                    <a href="#contenedor-2">Home</a>
                    <a href="#contenedor-3">New</a>
                    <a href="#contenedor-4">Popular</a>
                    <a href="#contenedor-5">Trending</a>
                    <a href="#contenedor-6">Categories</a>
                </nav>
            </header>

        </div>
    )
}
