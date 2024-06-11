import React from "react";
import UnderlinedText from "./Underline";

export default function Banner() {
  return (
    <div className="w-full h-auto bg-yellow-400 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Want an extra Rs. 100?
          </h1>
          <p className="text-gray-700">
            Subscribe to Boost My Budget and I’ll send you all the information
            you need to make £100 online in the next 10 days!
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-800">
                Name
              </label>
              <input
                id="name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-800">
                Email
              </label>
              <input
                id="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-800">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
