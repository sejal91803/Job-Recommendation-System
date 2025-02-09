import React from 'react';
import { Layout } from './Layout';

function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-4 py-12">
        <div className="max-w-full text-center">
          <h1 className="text-4xl font-serif text-gray-800 mb-12">
            About HireEase
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 text-left">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                HireEase is an innovative hiring platform that simplifies recruitment by connecting employers with top talent through smart matching algorithms and AI-powered recommendations. Our user-friendly interface ensures a seamless hiring experience for businesses and job seekers alike.
              </p>
              <p className="text-lg text-gray-700">
                With a focus on transparency, speed, and accuracy, HireEase transforms traditional hiring into an efficient digital process. Whether you're looking to streamline recruitment or find the perfect job, we make the journey smooth and hassle-free.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-[90%] mx-auto"
              />
            </div>
          </div>

          <h2 className="text-2xl font-serif text-gray-800 mb-6 text-left">
            How We Help You
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600">✓</span>
                </div>
                <h3 className="text-lg font-semibold">Smart Job Matching</h3>
              </div>
              <p className="text-gray-600">Get personalized job recommendations based on your resume.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600">✓</span>
                </div>
                <h3 className="text-lg font-semibold">Easy Resume Upload</h3>
              </div>
              <p className="text-gray-600">Just upload your resume, and we'll do the rest.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600">✓</span>
                </div>
                <h3 className="text-lg font-semibold">Fast & Efficient</h3>
              </div>
              <p className="text-gray-600">Say goodbye to long searches—let jobs find you!</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600">✓</span>
                </div>
                <h3 className="text-lg font-semibold">Trusted by Professionals</h3>
              </div>
              <p className="text-gray-600">Join thousands of users who've successfully found jobs with us.</p>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-gray-800 mb-6 text-left">
            Our Mission
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-left">
            <p className="text-lg text-gray-700">
              Our mission is to revolutionize the job search process by offering tailored job suggestions based on your profile, skills, and career aspirations. We aim to bridge the gap between job seekers and employers by providing a seamless, efficient, and AI-powered platform. With a focus on accuracy and personalization, we strive to make job hunting effortless while helping companies find the right talent faster.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
