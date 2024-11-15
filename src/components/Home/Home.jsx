import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="main-container bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="sub-container container mx-auto px-6 flex items-center justify-between gap-x-4">
        {/* Content Section */}
        <div className="flex flex-col items-start justify-center flex-1">
          <h1 className="text-4xl font-bold mb-3">Feeling hungry?</h1>
          <p className="text-lg mb-6">Order your favorite Pizza in minutes!</p>
          <Link
            to="/dashboard"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-end">
          <img
            className="w-full max-w-md rounded-md shadow-lg object-cover"
            src="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6YXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Pizza"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
