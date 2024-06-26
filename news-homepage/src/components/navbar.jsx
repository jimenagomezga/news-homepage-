import React from 'react'
import '.././styles/navbar.css';
import Logo from '../images/logo.svg';
// import Menu from '../images/more.png';

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" />
            <nav>
                <input type="checkbox" name="" id="btn-menu" class="custom-checkbox" />
                <label for="btn-menu" class="label-burger">
                    <div class="container-burger">
                        <div class="linea linea-top"></div>
                        <div class="linea linea-med"></div>
                        <div class="linea linea-low"></div>
                    </div>
                </label>
                <ul className="nav">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popula</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </div>
    )
}
