import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './Components/Booking Form';
import { updateTimes } from './Components/Main';


test('Renders the static text in an h2 element', () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ['12:00', '13:00', '14:00'];

  render(<BookingForm SubmitForm={mockSubmitForm} dispatch={mockDispatch} availableTimes={mockAvailableTimes} />);
  const headingElement = screen.getByRole('heading', { name: /book a table/i });
  expect(headingElement).toBeInTheDocument();
});


test('updateTimes returns the same value provided in the state', () => {
  const mockState = ['12:00', '13:00', '14:00'];
  const mockDate = new Date();

  const result = updateTimes(mockState, mockDate);

  expect(result).toEqual({availableTimes: mockState});
});
