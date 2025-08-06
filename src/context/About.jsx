import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                We are dedicated to providing innovative solutions and exceptional experiences 
                for our users. Our team works tirelessly to create meaningful connections 
                and deliver value through technology.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading platform that empowers individuals and businesses 
                to achieve their goals through cutting-edge technology and user-centric design.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Innovation and creativity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  User experience excellence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Transparency and trust
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Continuous improvement
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Contact Info</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  contact@example.com
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Thank you for choosing us. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
