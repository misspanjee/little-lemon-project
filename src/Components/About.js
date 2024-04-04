import React from 'react';
import ownerPhoto1 from '../images/Mario and Adrian B.jpg';
import ownerPhoto2 from '../images/restaurant chef B.jpg';

const About = () => {
    return (
        <div className ="about">
            <section>
                <div className = "main-text"><h2>Our Story</h2>
                    <p>
                        Little Lemon, founded by Adrian and Mario, is a culinary venture dedicated to infusing everyday dining with vibrant flavors. With a focus on quality ingredients and creative flair, our menu celebrates fresh, bold tastes that bring people together. Whether you're grabbing a quick bite or enjoying a leisurely meal, join us on a flavorful journey where every dish is crafted with passion and innovation.
                    </p>
                </div>

                <div className="about-images">
                    <div className="ownerPhoto2">
                        <img src={ownerPhoto2} alt=""/>
                    </div>
                    <div className="ownerPhoto1">
                        <img src={ownerPhoto1} alt=""/>
                    </div>
                </div>
             </section>
        </div>
    );
};

export default About;