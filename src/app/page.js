"use client";
import AllBlogs from "@/components/AllBlogs";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Blogs from "@/components/Blogs";
import Diveder from "@/components/Diveder";
import Hero2 from "@/components/Hero2";
import { apiEndPoint } from "@/hooks/strapiApi";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [heroData, setHeroData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  // hero api--
  const getHeroApi = async () => {
    try {
      const res = await apiEndPoint.get("heroes?populate=*");
      // console.log("hero api", res);
      setHeroData(res.data.data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };
  // blog api --

  const getBlogApi = async () => {
    try {
      const res = await apiEndPoint.get("blogs?populate=*");
      console.log("blog api", res);
      setBlogData(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getHeroApi();
    getBlogApi();
  }, []);

  return (
    <div>
      <Hero2 heroData={heroData}></Hero2>
      <Banner2></Banner2>
      <Blogs blogData={blogData} text={"Our Popular Blogs"}></Blogs>
      <Banner></Banner>
      <Blogs blogData={blogData} text={"Recent Blogs"}></Blogs>
      <AllBlogs></AllBlogs>
    </div>
  );
}
