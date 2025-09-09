import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">
          GEEFINERY
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-yellow-500">Home</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">Shop</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">About</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">Contact Us</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">Login</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">Sign Up</a>

        </div>

    
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-700 w-32" />
          </div>

          {/* Mobile Search Icon (visible on mobile, to open search overlay/modal) */}
          <button className="md:hidden text-gray-500 hover:text-yellow-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>

          <a href="#" className="text-gray-500 hover:text-yellow-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-yellow-500 focus:outline-none focus:text-yellow-500"
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
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Shop</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Login</a>
          <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Sign Up</a>
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