import React from "react";

export default function Banner2() {
  return (
    <div className="bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome to Our Blog
          </h1>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4">
            Explore insightful articles, tips, and stories from our experts.
          </p>
          <div className="mt-6">
            <a
              href="/blog"
              className="inline-block bg-red-600 py-3 px-6 rounded-md shadow-md text-white font-semibold hover:bg-red-700"
            >
              Read Our Latest Posts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
