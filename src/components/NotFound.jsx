import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
          >
            Go Back Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might want to try:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/blog" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Blog
            </Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              About
            </Link>
            <Link to="/search" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Search
            </Link>
            <Link to="/profile" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Profile
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Still having trouble? <a href="#" className="text-blue-600 hover:text-blue-800">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
