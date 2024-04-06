import React, { useState, useEffect } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (date && times && guests && occasion && !isNaN(guests)) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [date, times, guests, occasion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
      setDate(e);
      props.dispatch(e);
    }
    const handleGuestsChange = (e) => {
        const value = e.target.value;
        // Only update state if value is a number
        if (!isNaN(value)) {
            setGuests(value);
        }
    }

    return (
        <header>
            <h1 className="book-text">Book a Table</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/*date*/}
                        <div>
                            <label htmlFor='book-date'>Choose Date: </label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>

                        {/*time*/}
                        <div>
                            <label htmlFor='book-time'>Choose Time: </label>
                            <select id='book-time' value={times} onChange={(e) => setTimes (e.target.value)}>
                                <option value="">Select a Time </option>
                                {
                                    Array.isArray(props.availableTimes) && props.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/*guests*/}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests: </label>
                            <input id='book-guests' min='1' value={guests} onChange={handleGuestsChange} />
                        </div>

                        {/*occasion*/}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion (e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Meeting</option>
                                <option>Graduation</option>
                            </select>
                        </div>

                        {/*submit*/}
                        <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value ={'Make Your Reservation'} disabled={!isFormValid}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;