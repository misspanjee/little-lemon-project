import React from 'react';
import { Link } from 'react-router-dom';
import restoPhoto from '../images/restaurantfood.jpg';

const Header = () => {
    return (
        <header className="hero">
            <section>
                <div className="herobanner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in
                    a lively casual environment. The restaurant features a locally-sourced menu with daily specials.
                    </p>
                    <Link to="/booking"><button aria-label="On Click">Reserve a Table</button></Link>
                </div>

                <div className='herobanner-image'>
                    <img src ={restoPhoto} alt="" />
                </div>
            </section>
        </header>
    );
};

export default Header;