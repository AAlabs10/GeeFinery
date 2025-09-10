import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Left Section: Sign In */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">Sign into Account</h1>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <i className="fab fa-facebook-f text-gray-700"></i>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <i className="fab fa-linkedin-in text-gray-700"></i>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <i className="fab fa-google text-gray-700"></i>
              </button>
            </div>
          </div>

          <div className="mb-6 text-center text-gray-500 relative">
            <span className="bg-white px-2 relative z-10">or use your email account</span>
            <div className="absolute inset-y-1/2 left-0 w-full h-px bg-gray-300"></div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="h-4 w-4 text-yellow-500 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 text-gray-700">Remember me</label>
              </div>
              <a href="#" className="font-medium text-yellow-500 hover:text-green-500">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-md transition-colors"
            >
              Sign In
            </button>
          </form>
          <div className="mt-8 text-center text-gray-500 text-xs">
            <a href="#" className="hover:underline mx-1">Privacy Policy</a>
            <span className="mx-1">•</span>
            <a href="#" className="hover:underline mx-1">Terms & Conditions</a>
          </div>
        </div>

        {/* Right Section: Hello, Friend! */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-teal-400 to-yellow-500 text-white p-8 md:p-12 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hello, Friend!</h2>
          <p className="text-lg mb-8">Fill up personal information and start journey with us.</p>
          <Link to="/signup">
          < button className="bg-white text-yellow-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;