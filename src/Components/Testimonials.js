import React from 'react';
import Reviews from '../Reviews';

const Testimonials = () => {
    return (
        <div className="testimonial-container">
            <section>
            <div className="testimonial-header">
                <h2>What Our Customers Say</h2>
            </div>

            {/* testimonial cards*/}
            <div className="testimonial-cards">
                {
                    Reviews.map(review => <div key={review.id} className="testimonial-items">
                        <img src={review.image} alt='' />
                        <div className="testimonial-content">
                            <div className="heading">
                                <h5>{review.name}</h5>
                                <p>{review.rating}</p>
                            </div>
                            <p className="review-text">{review.review}</p>
                        </div>
                    </div>)
                }
            </div>
            </section>
        </div>
    );
};
export default Testimonials;