import React from 'react';
import BookingForm from './Booking Form';

const Booking = (props) => {
    return (
       <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm}/>
    );
};
export default Booking;