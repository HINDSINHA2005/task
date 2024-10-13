// src/components/Dashboard.js
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'User', email: 'user@example.com' };
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 bg-indigo-600 text-white">
          <h1 className="text-xl font-bold">My App</h1>
          <button className="text-white hover:text-gray-300">Logout</button>
        </div>
        <ul className="mt-6">
          <li>
            <Link
              to="/dashboard"
              className={`block py-2 px-4 hover:bg-indigo-100 ${activeTab === 'dashboard' ? 'bg-indigo-100' : ''}`}
              onClick={() => handleTabClick('dashboard')}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`block py-2 px-4 hover:bg-indigo-100 ${activeTab === 'profile' ? 'bg-indigo-100' : ''}`}
              onClick={() => handleTabClick('profile')}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`block py-2 px-4 hover:bg-indigo-100 ${activeTab === 'settings' ? 'bg-indigo-100' : ''}`}
              onClick={() => handleTabClick('settings')}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Welcome, {user.username}!</h2>
          <div className="relative">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Profile Options
            </button>
          </div>
        </header>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Routes>
            <Route path="/dashboard" element={
              <>
                <h3 className="text-2xl font-bold mb-4">Dashboard Content</h3>
                <p>Your statistics, recent activities, and more will appear here.</p>
              </>
            } />
            <Route path="/profile" element={
              <>
                <h3 className="text-2xl font-bold mb-4">Profile Information</h3>
                <p>Your profile details will appear here.</p>
              </>
            } />
            <Route path="/settings" element={
              <>
                <h3 className="text-2xl font-bold mb-4">Settings</h3>
                <p>Update your preferences and settings here.</p>
              </>
            } />
            <Route path="*" element={
              <>
                <h3 className="text-2xl font-bold mb-4">404 Not Found</h3>
                <p>The page you are looking for does not exist.</p>
              </>
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
