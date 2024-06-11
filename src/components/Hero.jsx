import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className=" flex mt-32 p-5 my-16 max-w-7xl mx-auto gap-10">
      <div className=" w-[50%]">
        <Image
          src={"/hero.jpg"}
          alt="hero img"
          height={200}
          width={200}
          className=" w-[100%] rounded-md "
          unoptimized={true}
        ></Image>
      </div>
      <div className=" w-[50%] my-10 flex flex-col gap-5">
        <h2 className=" text-xl font-bold ">Bloging Heading</h2>
        <p>
          Bloging discription : Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. A, maiores eveniet exercitationem laudantium
          consectetur, deleniti officiis similique animi accusantium quis
          possimus provident nostrum esse.
        </p>
      </div>
    </div>
  );
}
