import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-indigo-700 mb-6">Welcome to Our Platform</h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    This is the home page. We're delighted to have you here. Explore our services and 
                    discover what makes us special.
                </p>
                
                <button 
                    onClick={() => navigate('/order-summery')}
                    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg 
                               transition-all duration-300 transform hover:scale-105 focus:outline-none 
                               focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
                >
                    Place Your Order
                </button>
                
                <div className="mt-10 text-sm text-gray-500">
                    <p>Need help? <span className="text-indigo-600 cursor-pointer hover:underline">Contact support</span></p>
                </div>
            </div>
        </div>
    );
};

export default Home;