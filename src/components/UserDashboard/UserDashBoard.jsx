// src/components/UserDashBoard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const UserDashBoard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center font-bold text-lg border-b border-gray-700">
          User Dashboard
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 p-4">
            <li>
              <Link
                to="/PromptSuggestion"
                className="block px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Prompt
              </Link>
            </li>
            <li>
              <Link
                to="/QuestionRecommendation"
                className="block px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Prompt Questioning
              </Link>
            </li>
            <li>
              <Link
                to="/FlightSearch"
                className="block px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Flight Searching
              </Link>
            </li>
            <li>
              <Link
                to="/UserBookingDashBoard"
                className="block px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Bookings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 text-center text-gray-400 text-sm">
          &copy; 2024 YourApp
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-gray-700">
          Select an option from the sidebar to navigate through the features.
        </p>
      </main>
    </div>
  );
};

export default UserDashBoard;
