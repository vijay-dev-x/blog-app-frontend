import React from "react";

export default function Diveder() {
  return (
    <div>
      <span className="relative flex justify-center my-5">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6">Lorem</span>
      </span>
    </div>
  );
}
