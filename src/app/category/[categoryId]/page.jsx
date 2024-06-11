"use client";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import { apiEndPoint } from "@/hooks/strapiApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const { categoryId } = useParams();
  const capitalizedCategoryId =
    categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
  // console.log("catagory params", capitalizedCategoryId);

  const [catagoryBlogData, setCatagoryBlogData] = useState(null);

  const getCatagoriesApi = async () => {
    try {
      if (categoryId === "all") {
        const res = await apiEndPoint.get(`/blogs?populate=*`);
        // console.log("catagories blog api", res);
        setCatagoryBlogData(res.data.data);
      } else {
        const res = await apiEndPoint.get(
          `/blogs?populate=*&filters[$and][0][catagory][name][$eq]=${categoryId}`
        );
        console.log("catagories blog api", res);
        setCatagoryBlogData(res.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("blog data catagories", catagoryBlogData);
  useEffect(() => {
    getCatagoriesApi();
  }, []);
  return (
    <div>
      <div className=" max-w-7xl mx-auto p-5 mt-20">
        <div>
          <Blogs
            text={`Blogs Related to ${capitalizedCategoryId}`}
            blogData={catagoryBlogData}
          ></Blogs>
        </div>
      </div>
      <div className=" my-10">
        <Banner></Banner>
      </div>
    </div>
  );
}
