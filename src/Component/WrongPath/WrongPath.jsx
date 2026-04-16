import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4">
      
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-bold text-green-600 drop-shadow-lg">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">Oops! Page not found</h2>
        <p className="text-gray-500 mt-3">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition duration-300">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;