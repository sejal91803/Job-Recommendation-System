import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Resume from './components/Resume';
import JobResults from './components/JobResults';
import About from './components/About';
import Contact from './components/Contact';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Resume />} />
        <Route path="/job-results" element={<JobResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
            <div className="max-w-6xl mx-auto">
              {/* Logo */}
              <div className="flex justify-center mb-8 pt-8">
                <img 
                  src="https://res.cloudinary.com/djgvrpf4x/image/upload/v1738731662/logo_geulpv.png" 
                  alt="HireEase Logo" 
                  className="h-12 w-auto"
                />
              </div>

              {/* Main Content */}
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <Login />
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50">
                    <h2 className="text-3xl font-serif italic mb-3 text-gray-800">
                      Find Your Dream Job
                    </h2>
                    <img
                      src="https://res.cloudinary.com/dnj89cwq9/image/upload/v1739010321/freepik__adjust__30608_laq4tn.png"
                      alt="Professional looking for job"
                      className="w-90 h-60 object-contain mb-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/signup" element={
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
            <div className="max-w-6xl mx-auto">
              {/* Logo */}
              <div className="flex justify-center mb-8 pt-8">
                <img 
                  src="https://res.cloudinary.com/djgvrpf4x/image/upload/v1738731662/logo_geulpv.png" 
                  alt="HireEase Logo" 
                  className="h-12 w-auto"
                />
              </div>

              {/* Main Content */}
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <Signup />
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50">
                    <h2 className="text-3xl font-serif italic mb-8 text-gray-800">
                      Find Your Dream Job
                    </h2>
                    <img
                      src="https://res.cloudinary.com/djgvrpf4x/image/upload/v1738732763/C_img_m5w44f.png"
                      alt="Professional looking for job"
                      className="w-64 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
