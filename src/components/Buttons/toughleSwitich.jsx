import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <label
        className={`flex items-center cursor-pointer rounded-full border-2 px-3 py-2 transition-all duration-400 ${
          isChecked ? 'border-green-500 w-28' : 'border-blue-500 w-40'
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span
          className={`flex justify-center items-center rounded-full transition-all duration-400 ${
            isChecked ? 'bg-green-500 w-12 h-12' : 'bg-blue-500 w-12 h-12'
          }`}
        >
          <svg
            className={`w-6 h-6 transition-all duration-400 ${
              isChecked ? 'opacity-0' : 'opacity-100'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
          <div
            className={`absolute w-4 h-4 bg-white rounded-sm transition-all duration-400 ${
              isChecked ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </span>
        <p
          className={`text-white transition-all duration-400 absolute ${
            isChecked ? 'opacity-0' : 'opacity-100'
          } left-16`}
        >
          Download
        </p>
        <p
          className={`text-white transition-all duration-400 absolute ${
            isChecked ? 'opacity-100' : 'opacity-0'
          } left-16`}
        >
          Open
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
