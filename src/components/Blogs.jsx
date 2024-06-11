import React from "react";
import UnderlinedText from "./Underline";
import SingleCard2 from "./SingleCard2";

export default function Blogs({ text, blogData }) {
  return (
    <div className=" max-w-7xl my-5 p-5 mx-auto">
      <h2 className=" font-bold text-3xl mb-5">
        <UnderlinedText text={text}></UnderlinedText>
      </h2>

      <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 gap-5">
        {blogData?.map((value) => (
          <div key={value.id}>
            <SingleCard2 value={value}></SingleCard2>
          </div>
        ))}
      </div>
    </div>
  );
}
