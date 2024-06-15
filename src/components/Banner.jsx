"use client";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Banner() {
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
    <div className="w-full h-auto bg-yellow-400 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Want an extra Rs. 100?
          </h1>
          <p className="text-gray-700">
            Subscribe to Boost My Budget and I’ll send you all the information
            you need to make £100 online in the next 10 days!
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-800">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
