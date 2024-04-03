import React, { useState, useEffect } from 'react';
import logo from "../images/Logo .svg";
import burgerMenuIcon from "../images/hamburger icon.svg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Update windowWidth when the window is resized
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Call handleResize right away so that windowWidth gets a value
        // even with the initial render.
        handleResize();

        // Remove the event listener when the component is unmounted
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array means this effect runs once when the component mounts
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navcontainer ${menuOpen ? "open" : ""}`}>
            <a href='/' className="logo"> <img src={logo} alt='logo'/> </a>

            {/*mobile navigation bar - hamburger menu*/}
            <div className="burgericon" onClick={toggleMenu}>
            <a href='/'> <img src={burgerMenuIcon} alt='burger icon'/> </a>
            </div>

            {/*desktop navigation bar - items*/}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="/"> Home </a>
                </li>
                <li>
                    <a href="/"> About </a>
                </li>
                <li>
                    <a href="/"> Menu </a>
                </li>
                <li>
                    <a href="/"> Reservations </a>
                </li>
                <li>
                    <a href="/"> Order Online </a>
                </li>
                <li>
                    <a href="/"> Log In </a>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;