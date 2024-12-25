'use client';
import React from 'react';

const Select_EN = () => {
  const selects = [
    {
      label: "Electric",
      options: ["0 day", "1 day", "3 days", "5 days", "10 days"],
    },
    {
      label: "Temporary",
      options: ["0 day", "1 day", "3 days", "5 days", "10 days"],
    },
    {
      label: "Permanent",
      options: ["0 day", "1 day", "3 days", "5 days", "10 days"],
    },
    {
      label: "Post",
      options: ["0 day", "1 day", "3 days", "5 days", "10 days"],
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center space-x-8">
      {selects.map((select, index) => (
        <div key={index}>
          <label className="block text-lg font-medium text-center mb-4">
            {select.label}
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {select.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 text-gray-700 transition-transform transform hover:scale-105"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">
          Template
        </h1>
        <Select_EN />
      </main>
    </div>
  );
}
