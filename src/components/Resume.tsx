import React, { useState } from 'react';
import { Upload, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Resume() {
  const [jobDays, setJobDays] = useState(30);
  const [jobCount, setJobCount] = useState(10);
  const [selectedPlatforms, setSelectedPlatforms] = useState(['linkedin']);

  const handleFileUpload = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Handle file upload logic here
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-sm w-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="https://i.ibb.co/Qp11Cvp/hireease-logo.png" 
                  alt="HireEase Logo" 
                  className="h-8 w-auto"
                />
              </Link>
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
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
                S
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-gray-800 mb-8">
          Upload your Resume and Find the best Job for you
        </h1>

        {/* Upload Section */}
        <div className="mb-8">
          <label className="block text-gray-700 mb-2">Upload Resume (Pdf or Word)</label>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileUpload}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">Drag and Drop file here</p>
            <p className="text-sm text-gray-500">Limit 200mb / file</p>
          </div>
        </div>

        {/* Job Search Filters */}
        <div className="space-y-6">
          <div>
            <label htmlFor="jobTitle" className="block text-gray-700 mb-2">
              Enter Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              placeholder="e.g., Software Engineer"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-gray-700 mb-2">
              Enter Job Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              placeholder="e.g., New York, NY"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Filter jobs posted in X days
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setJobDays(Math.max(0, jobDays - 1))}
                className="p-2 border border-gray-300 rounded-l-lg hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                value={jobDays}
                onChange={(e) => setJobDays(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border-y border-gray-300 text-center focus:outline-none"
              />
              <button
                onClick={() => setJobDays(jobDays + 1)}
                className="p-2 border border-gray-300 rounded-r-lg hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Enter number of jobs to be displayed
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setJobCount(Math.max(1, jobCount - 1))}
                className="p-2 border border-gray-300 rounded-l-lg hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                value={jobCount}
                onChange={(e) => setJobCount(parseInt(e.target.value) || 1)}
                className="w-full px-4 py-2 border-y border-gray-300 text-center focus:outline-none"
              />
              <button
                onClick={() => setJobCount(jobCount + 1)}
                className="p-2 border border-gray-300 rounded-r-lg hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Include Results From:
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes('linkedin')}
                  onChange={() => togglePlatform('linkedin')}
                  className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <span>Linkedin</span>
              </label>
              {/* Add more platforms as needed */}
            </div>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-200">
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;