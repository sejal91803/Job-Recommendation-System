import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, MessageSquare } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="https://res.cloudinary.com/djgvrpf4x/image/upload/v1738731662/logo_geulpv.png"
                alt="HireEase Logo" 
                className="h-14 w-auto"
              />
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2">
                    About Us
                  </Link>
                  <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="text-gray-700 hover:text-purple-600">
                <MessageSquare className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-purple-600">
                <Bell className="h-6 w-6" />
              </button>
              <Link
                to="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center pt-16"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
              Find Your Dream Job, Faster
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              HireEase is an AI-powered job recommendation system that simplifies your job search 
              by matching you with the most relevant opportunities based on your skills and experience. 
              Simply upload your resume, and let our smart algorithm find the perfect job for you—no 
              more endless searching.
            </p>
            <Link
              to="/login"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition duration-200"
            >
              Find Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;