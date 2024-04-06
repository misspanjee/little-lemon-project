import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = (props) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    }
    return (
        <div className='confirm'>
            <div>
                <h1>SUCCESS!</h1>
                <p>Your reservation has been confirmed!</p>
                <button onClick={handleButtonClick}>Go Back</button>
            </div>

        </div>
    )
};
export default ConfirmedBooking;