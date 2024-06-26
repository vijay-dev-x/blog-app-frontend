"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero2({ heroData }) {
  // if (!heroData) {
  //   return <div>Loading...</div>; // or any loading indicator you prefer
  // }
  // console.log("hero", heroData);
  console.log("img", heroData?.attributes?.img?.data[0].attributes.url);

  return (
    <div className=" mt-16 mb-10 max-w-7xl mx-auto p-5">
      <div>
        <h2 className=" text-2xl md:text-7xl text-black/80 font-bold my-5">
          {heroData?.attributes?.heading}
        </h2>
      </div>
      <div className=" w-full h-full">
        {heroData?.attributes?.img?.data[0]?.attributes?.url && (
          <Image
            src={heroData?.attributes?.img?.data[0]?.attributes?.url}
            height={300}
            width={300}
            alt="hero loho"
            unoptimized={true}
            className=" mx-auto rounded-md object-center object-cover h-80 md:h-[70vh] w-[100%]"
          ></Image>
        )}
        <div className=" mt-8 text-lg md:text-xl font-semibold text-black/70">
          <p>{heroData?.attributes?.desc}</p>
        </div>
      </div>
    </div>
  );
}
