"use client";

import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
  
  export default function NavigationBar() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  
    return (
      <>
        <header className="flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-4 shadow-md">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              <FaBell size={20} />
            </button>
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              onClick={() => setLoginModalOpen(true)}
            >
              <FaUserCircle size={24} />
            </button>
          </div>
        </header>
      </>
    );
  }