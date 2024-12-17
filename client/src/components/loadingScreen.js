import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Spinner container */}
      <div className="relative w-16 h-16">
        {/* Outer spinning circle */}
        <div className="absolute w-16 h-16 border-4 border-blue-200/20 rounded-full"></div>
        {/* Inner spinning circle - this one animates */}
        <div className="absolute w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
      {/* Loading text */}
      <p className="mt-4 text-lg font-bold text-white">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
