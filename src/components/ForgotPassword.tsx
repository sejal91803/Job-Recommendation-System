import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <img 
          src="https://i.ibb.co/Qp11Cvp/hireease-logo.png" 
          alt="HireEase Logo" 
          className="h-12 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden mx-auto">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 text-center">
                Change Your Password
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/login"
                    className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 text-center"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Image Section - Left empty for your image */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-50 to-blue-50 min-h-[300px] md:min-h-0">
            {/* Your image will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;