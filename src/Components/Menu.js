import React from 'react';
import food from '../food';

const Menu = () => {
    return (
        <div className="specials-container">
           <div className="specials-header">
                <h2>This Week's Specials!</h2>
                <button>Online Menu</button>
           </div>

           {/* menu cards */}
           <div className="cards">
                {
                    food.map(food => <div key={food.id} className="specials-items">
                        <img src={food.image} alt='' />
                        <div className="specials-content">
                            <div className="heading">
                                <h5>{food.title}</h5>
                                <p>{food.price}</p>
                            </div>
                             <p>{food.description}</p>
                            <button className="orderButton">Order Now</button>
                         </div>
                    </div>)

                }
           </div>
        </div>
    );
};
export default Menu;