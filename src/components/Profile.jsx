import React from "react";
import { useAuth } from "../context/AuthContext.jsx";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">
              {user ? user.charAt(0).toUpperCase() : "U"}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Profile</h2>
          <p className="text-gray-600">Welcome back, <strong className="text-purple-600">{user}</strong>!</p>
        </div>

        <div className="space-y-6">
          {/* User Info Section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              User Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
                <p className="text-gray-800 font-medium">{user}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  Active
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Member Since</label>
                <p className="text-gray-800">January 2024</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Login</label>
                <p className="text-gray-800">Today</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Posts Created</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">48</div>
              <div className="text-sm text-gray-600">Comments</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
              <div className="text-sm text-gray-600">Likes Received</div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md">
              Edit Profile
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              View Settings
            </button>
            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-md"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Need help? <a href="#" className="text-purple-600 hover:text-purple-800">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
