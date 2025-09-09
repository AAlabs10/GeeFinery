import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <img src="Geeim.jpg" alt="Loading..." className="w-48 animate-pulse" />
      </div>
    );
  }

  return (
    <div>
      <Router>
       <Navbar />
      </Router>
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to GeeFinery</h1>
      </main>
    </div>
  );
};

export default App;
