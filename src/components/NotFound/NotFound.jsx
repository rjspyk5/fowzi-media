import React from "react";
import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center p-6">
      <h1 className="text-6xl font-bold text-primary-1">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary-1 text-white font-semibold rounded-lg shadow-md 00 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};
