import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          Restaurant
          <span className="block text-xs font-normal -mt-1">
            TAGLINE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-700">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Chefs</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Booking</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Contact Us</a>
        </div>

        {/* Search, User, Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (visible on desktop) */}
          <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-700 w-32" />
          </div>

          {/* Mobile Search Icon (visible on mobile, to open search overlay/modal) */}
          <button className="md:hidden text-gray-700 hover:text-green-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>

          <a href="#" className="text-gray-700 hover:text-green-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-green-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-50 rounded-md py-2 px-4">
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Chefs</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Booking</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
          {/* Mobile Search Input */}
          <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100 mt-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-700 flex-grow" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;