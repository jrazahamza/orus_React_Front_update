import React, { useState } from 'react';

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
  });

  const airlines = ['Delta Airlines', 'American Airlines', 'Emirates', 'Qatar Airways', 'United Airlines', 'British Airways', 'Lufthansa', 'Air France'];
  const airports = ['JFK', 'LAX', 'DXB', 'HND', 'LHR', 'SYD', 'SIN', 'CDG', 'ATL', 'ORD'];
  const prices = [100, 250, 400, 500, 700, 1000, 1500, 2000];

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const generateMockFlights = () => {
    return Array.from({ length: 10 }, () => {
      const origin = searchParams.origin || airports[Math.floor(Math.random() * airports.length)];
      const destination = searchParams.destination || airports[Math.floor(Math.random() * airports.length)];
      const departureDate = searchParams.departureDate || '2024-11-25';
      const price = prices[Math.floor(Math.random() * prices.length)];
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const flightNumber = `FL${Math.floor(Math.random() * 9000) + 1000}`;

      return {
        airline,
        flightNumber,
        origin,
        destination,
        departureDate,
        price,
      };
    });
  };

  const searchFlights = () => {
    setLoading(true);
    setError(null);

    try {
      const mockFlights = generateMockFlights();
      setFlights(mockFlights);
    } catch (err) {
      setError('Failed to generate flight data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Flight Search</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mb-6">
        <input
          type="text"
          name="origin"
          placeholder="Origin (e.g., JFK)"
          value={searchParams.origin}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination (e.g., LAX)"
          value={searchParams.destination}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="departureDate"
          value={searchParams.departureDate}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={searchFlights}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Search Flights
      </button>

      {loading && <p className="text-blue-500 text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <ul className="mt-6 space-y-4">
        {flights.map((flight, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200"
          >
            <p className="text-lg font-bold">{flight.airline} ({flight.flightNumber})</p>
            <p className="text-sm">
              <span className="font-semibold">From:</span> {flight.origin} ➡️{' '}
              <span className="font-semibold">To:</span> {flight.destination}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Departure:</span> {flight.departureDate}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Price:</span> <span className="text-green-600 font-bold">${flight.price}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;
