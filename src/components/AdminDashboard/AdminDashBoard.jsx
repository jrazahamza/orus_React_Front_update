import React, { useState, useEffect } from 'react';

// Sample booking data (this could be fetched from an API)
const sampleBookings = [
  {
    id: 1,
    name: 'John Doe',
    number: '1234567890',
    flightClass: 'Economy',
    flightTiming: '10:00 AM',
    tripDays: 5,
    hotelStayDays: 4,
    hotel: 'Hotel A',
    startDate: '2024-12-01',
    endDate: '2024-12-06',
  },
  {
    id: 2,
    name: 'Jane Smith',
    number: '0987654321',
    flightClass: 'Business',
    flightTiming: '2:00 PM',
    tripDays: 7,
    hotelStayDays: 6,
    hotel: 'Hotel B',
    startDate: '2024-12-05',
    endDate: '2024-12-12',
  },
];

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setBookings(sampleBookings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 text-center mb-8">
        Admin Dashboard
      </h1>

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">User Bookings</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Flight Class</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Flight Timing</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Trip Days</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Hotel Stay Days</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Hotel</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Start Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">End Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.flightClass}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.flightTiming}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.tripDays}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.hotelStayDays}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.hotel}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.startDate}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{booking.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
