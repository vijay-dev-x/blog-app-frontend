"use client";
import generateMetadata from "@/app/generateMetadata";
import SingleBlogPost from "@/components/SingleBlogPost";
import { apiEndPoint } from "@/hooks/strapiApi";
import Head from "next/head";
import SanitizedContent from "@/utility/SanitizeHtml";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// export const metadata = {
//   title: "hlo 2",
//   description: "Get in touch with us for any inquiries or support.",
//   keywords: "contact, support, inquiries",
// };

export default function Page() {
  const [blogData, setBlogData] = useState(null);
  const { blogId } = useParams();

  const getSingleBlogApi = async () => {
    try {
      const res = await apiEndPoint.get(`blogs/${blogId}/?populate=*`);
      setBlogData(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const optionsDate = { day: "numeric", month: "short", year: "numeric" };
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);
    return `${formattedDate} at ${formattedTime}`;
  };

  useEffect(() => {
    if (blogId) {
      getSingleBlogApi();
      // document.title = "wah bete mauj kardeyyyyy !!!! ";
    }
  }, [blogData]);

  if (!blogData) {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <p className="mx-2">Loading...</p>
        <p className="animate-spin">
          <Loader />
        </p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>hlo 4</title>
        <meta name="description" content={"hyyy"} />
        <meta name="keywords" content="contact, support, inquiries" />
      </Head>
      {/* <SingleBlogPost></SingleBlogPost> */}

      <div className="max-w-7xl p-5 mt-20 mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-semibold">
            {blogData.attributes.title}
          </h2>
          <p className="text-gray-500/80">
            Published on: {formatDateTime(blogData.attributes.publishedAt)}
          </p>
        </div>
        <div className="my-5 h-full w-full mx-auto">
          <img
            src={blogData.attributes.img?.data[0]?.attributes?.url}
            className="rounded-md w-full object-cover h-[600px]"
            alt={blogData.attributes.title}
          />
        </div>
        <div>
          <p className="text-lg">
            <SanitizedContent content={blogData.attributes.desc} />
          </p>
        </div>
      </div>
    </>
  );
}
