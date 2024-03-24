import React from 'react'
import '.././styles/navbar.css';
import Logo from '../images/logo.svg';

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" />
            <nav >
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
