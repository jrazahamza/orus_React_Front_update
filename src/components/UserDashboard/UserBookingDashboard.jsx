import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserBookingDashBoard = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    number: '',
    address: '',
    flight: '',
    hotel: '',
    hotelName: '',
    flightTiming: '',
    tripDays: 1,
    hotelDays: 1,
    startDate: '',
    endDate: '',
    origin: '',
    destination: '',
  });

  const [price, setPrice] = useState(0);
  const [bookingSummary, setBookingSummary] = useState(null);
  const [flightOptions, setFlightOptions] = useState([]);
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [error, setError] = useState('');

  const prices = {
    flights: { Economy: 100, Business: 200, FirstClass: 300 },
    hotels: {
      'Hotel A': 50,
      'Hotel B': 100,
      'Hotel C': 150,
      'Hotel D': 200,
    },
  };

  const handleInputChange = (field, value) => {
    setBookingDetails((prev) => ({ ...prev, [field]: value }));
  };

  const calculatePrice = () => {
    const flightCost = prices.flights[bookingDetails.flight] || 0;
    const hotelCost = prices.hotels[bookingDetails.hotel] || 0;
    const totalPrice =
      flightCost +
      hotelCost * bookingDetails.hotelDays +
      bookingDetails.tripDays * 20;
    setPrice(totalPrice);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    calculatePrice();
    setBookingSummary({
      ...bookingDetails,
      totalPrice: price,
    });
  };

  const searchFlights = async () => {
    if (!bookingDetails.startDate || !bookingDetails.endDate) {
      setError('Please select both start and end dates for your trip.');
      return;
    }

    setLoadingFlights(true);
    setError('');
  };

  const downloadTicketPDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal');

    doc.setFontSize(16);
    doc.text('Booking Summary', 14, 10);

    let yPosition = 20;

    doc.text(`Name: ${bookingSummary.name}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Number: ${bookingSummary.number}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Address: ${bookingSummary.address}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Flight Class: ${bookingSummary.flight}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Hotel Type: ${bookingSummary.hotel}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Flight Timing: ${bookingSummary.flightTiming}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Trip Start Date: ${bookingSummary.startDate}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Trip End Date: ${bookingSummary.endDate}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Trip Days: ${bookingSummary.tripDays}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Hotel Stay Days: ${bookingSummary.hotelDays}`, 14, yPosition);
    yPosition += 10;

    doc.text(`Total Price: $${bookingSummary.totalPrice}`, 14, yPosition);

    doc.save('ticket.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 text-center mb-8">User Dashboard</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleBooking} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Enter Your Name</label>
            <input
              type="text"
              value={bookingDetails.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Your Number</label>
            <input
              type="text"
              value={bookingDetails.number}
              onChange={(e) => handleInputChange('number', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Enter Your Address</label>
            <input
              type="text"
              value={bookingDetails.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Select Flight Class</label>
            <select
              value={bookingDetails.flight}
              onChange={(e) => handleInputChange('flight', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="FirstClass">First Class</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Select Hotel</label>
            <select
              value={bookingDetails.hotel}
              onChange={(e) => handleInputChange('hotel', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              {Object.keys(prices.hotels).map((hotelName) => (
                <option key={hotelName} value={hotelName}>
                  {hotelName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Flight Timing</label>
            <input
              type="time"
              value={bookingDetails.flightTiming}
              onChange={(e) => handleInputChange('flightTiming', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Trip Start Date</label>
            <input
              type="date"
              value={bookingDetails.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Trip End Date</label>
            <input
              type="date"
              value={bookingDetails.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Trip Days</label>
            <input
              type="number"
              min="1"
              value={bookingDetails.tripDays}
              onChange={(e) => handleInputChange('tripDays', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Hotel Stay Days</label>
            <input
              type="number"
              min="1"
              value={bookingDetails.hotelDays}
              onChange={(e) => handleInputChange('hotelDays', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {error && <div className="text-red-600">{error}</div>}


          {loadingFlights && <div className="text-blue-500">Loading available flights...</div>}

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md"
          >
            Book Now
          </button>
        </form>

        {bookingSummary && (
          <div className="mt-6 p-4 bg-gray-200 rounded-md">
            <h2 className="text-xl font-bold">Booking Summary</h2>
            <p>Name: {bookingSummary.name}</p>
            <p>Number: {bookingSummary.number}</p>
            <p>Address: {bookingSummary.address}</p>
            <p>Flight Class: {bookingSummary.flight}</p>
            <p>Hotel Type: {bookingSummary.hotel}</p>
            <p>Flight Timing: {bookingSummary.flightTiming}</p>
            <p>Start Date: {bookingSummary.startDate}</p>
            <p>End Date: {bookingSummary.endDate}</p>
            <p>Trip Days: {bookingSummary.tripDays}</p>
            <p>Hotel Days: {bookingSummary.hotelDays}</p>
            <p>Total Price: ${bookingSummary.totalPrice}</p>
            <button
              onClick={downloadTicketPDF}
              className="mt-4 py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md"
            >
              Download Ticket PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBookingDashBoard;
