import React from "react";

const UnderlinedText = ({ text }) => {
  return (
    <div className=" -z-10 relative inline-block">
      <span className="text-red-600 font-bold ">{text}</span>
      <div className="absolute left-0 bottom-0 w-full mt-5 h-1">
        <div className="bg-yellow-400 rounded-full h-1 w-4/5 mx-auto"></div>
        <div className="bg-yellow-400 rounded-full h-1 w-full"></div>
      </div>
    </div>
  );
};

export default UnderlinedText;
