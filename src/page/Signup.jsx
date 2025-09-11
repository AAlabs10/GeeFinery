import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Section (Welcome Back) */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-teal-400 to-yellow-500 text-white p-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-8">To keep connected with us please login with your personal info</p>
          <Link to="/loginpage">
          <button className="bg-transparent border-2 border-white text-white py-2 px-8 rounded-full hover:bg-white hover:text-yellow-500 transition duration-300">
            SIGN IN
          </button>
          </Link>
        </div>

        {/* Right Section (Create Account) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <p className="text-gray-500 text-center mb-6">or use your email for registration:</p>

          {/* Form Fields */}
          <form>
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-user text-gray-400"></i>
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-envelope text-gray-400"></i>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-lock text-gray-400"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-full hover:bg-yellow-500 transition duration-300 font-semibold"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;