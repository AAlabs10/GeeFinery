import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import LoginPage from "./page/LoginPage";
import Signup from "./page/Signup";

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
       <Routes>
         <Route path="/loginpage" element={<LoginPage />} />
         <Route path="/signup" element={<Signup />} />
       </Routes>
      </Router>
     
    </div>
  );
};

export default App;
