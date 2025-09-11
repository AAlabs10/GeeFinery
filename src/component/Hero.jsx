import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 sm:p-12 lg:p-24">
      <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 leading-tight mb-4">GEEFINERY CLOTHING</h1>
        <p className="text-white text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
         Geefinery clothing is an Afrocentric fashion brand,where heritage meet contemporary styles😁❤
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center mx-auto lg:mx-0">
          Shop Now <span className="ml-2">→</span>
        </button>
      </div>
      <div className="relative">
        <img
          src="GeeFinery/public/Owner.jpg"
          alt="GeeFinery/public/Owner.jpg"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
