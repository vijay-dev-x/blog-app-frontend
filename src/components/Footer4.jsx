"use client";
import React from "react";

export default function Footer4() {
  return (
    <div>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              &copy; 2024 YourCompany. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
