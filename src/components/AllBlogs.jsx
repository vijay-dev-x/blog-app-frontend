import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AllBlogs() {
  return (
    <Link href={"/category/all"}>
      <div className=" mx-auto max-w-7xl p-5 ">
        <button className=" text-lg flex py-3 px-10 bg-yellow-400 hover:bg-yellow-500 text-black/70 font-semibold rounded-md">
          See all bogs
          <span>
            <ArrowRight className="mx-1"></ArrowRight>
          </span>
        </button>
      </div>
    </Link>
  );
}
