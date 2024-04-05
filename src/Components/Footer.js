import React from 'react';
import secondLogo from '../images/logo 2.png';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className ="second-logo">
                    <img src={secondLogo} alt=""/>
                </div>
                <div>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 514 Seattle, USA </li>
                        <li>Phone Number: <br/>588-6500. </li>
                        <li>Email:<br/> little.lemon@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;