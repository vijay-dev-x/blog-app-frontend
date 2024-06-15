"use client";
import React from "react";
import Head from "next/head";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Page() {
  const sendEmail = (e) => {
    const toastStart = toast.loading("Sending..");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_48ai4ab",
        "template_lo02qbh",
        e.target,
        "rBenLhrdhKWQzCKJ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent", { id: toastStart });
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong", { id: toastStart });
        }
      );
  };
  return (
    <div className="min-h-screen mt-20 flex flex-col md:flex-col gap-10 items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Contact Us
        </h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg mt-6">
        <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
          Get in Touch
        </h3>
        <p className="text-center text-sm text-gray-700">
          You can also reach us via email at{" "}
          <a href="mailto:info@yourcompany.com" className="text-red-600">
            info@yourcompany.com
          </a>
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com/yourcompany"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.35C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.919c-1.505 0-1.797.714-1.797 1.76v2.307h3.594l-.468 3.622h-3.126V24h6.128c.73 0 1.324-.594 1.324-1.325V1.325C24 .594 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourcompany"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.524 6.573A4.903 4.903 0 01.96 9.2v.061a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.923 4.923 0 004.604 3.419A9.868 9.868 0 010 21.54a13.94 13.94 0 007.548 2.213c9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/yourcompany"
            className="text-gray-500 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.057 2.005.25 2.475.415a4.93 4.93 0 011.8 1.17 4.93 4.93 0 011.17 1.8c.165.47.358 1.269.415 2.475.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.057 1.206-.25 2.005-.415 2.475a4.93 4.93 0 01-1.17 1.8 4.93 4.93 0 01-1.8 1.17c-.47.165-1.269.358-2.475.415-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.206-.057-2.005-.25-2.475-.415a4.93 4.93 0 01-1.8-1.17 4.93 4.93 0 01-1.17-1.8c-.165-.47-.358-1.269-.415-2.475-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.057-1.206.25-2.005.415-2.475a4.93 4.93 0 011.17-1.8 4.93 4.93 0 011.8-1.17c.47-.165 1.269-.358 2.475-.415 1.265-.058 1.645-.069 4.849-.069m0-2.163C8.755 0 8.344 0 7.052.048 5.72.098 4.634.292 3.677.684a7.914 7.914 0 00-2.9 1.918A7.914 7.914 0 00.84 5.502c-.392.957-.586 2.043-.636 3.375C0 9.344 0 9.755 0 12s.012 2.656.048 3.948c.05 1.332.244 2.418.636 3.375a7.914 7.914 0 001.918 2.9 7.914 7.914 0 002.9 1.918c.957.392 2.043.586 3.375.636 1.292.048 1.703.048 4.948.048s3.656 0 4.948-.048c1.332-.05 2.418-.244 3.375-.636a7.914 7.914 0 002.9-1.918 7.914 7.914 0 001.918-2.9c.392-.957.586-2.043.636-3.375.048-1.292.048-1.703.048-4.948s0-3.656-.048-4.948c-.05-1.332-.244-2.418-.636-3.375a7.914 7.914 0 00-1.918-2.9 7.914 7.914 0 00-2.9-1.918c-.957-.392-2.043-.586-3.375-.636C15.656 0 15.245 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
