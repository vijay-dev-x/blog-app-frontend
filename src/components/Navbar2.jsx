"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { apiEndPoint } from "@/hooks/strapiApi";
import { useParams } from "next/navigation";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [catagoriesData, setCatagoriesData] = useState([]);
  const { categoryId } = useParams();
  console.log("navbar params", categoryId);

  // catagories api ---
  const getCatagoriesApi = async () => {
    try {
      const res = await apiEndPoint.get("/catagories");
      // console.log("navbar api", res);
      setCatagoriesData(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getCatagoriesApi();
  }, []);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full mb-10 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" py-2">
              <Link href="/">
                <img src="/logo.png" alt="logo" className=" w-36 h-24" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center space-x-4">
                {catagoriesData?.map((Vaule) => (
                  <Link
                    key={Vaule.id}
                    href={`/category/${Vaule.attributes.name}`}
                  >
                    <p
                      className={`${
                        categoryId === Vaule.attributes.name &&
                        " bg-gray-700 text-white"
                      } first-letter:capitalize text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 mt-8 rounded-md text-sm font-medium`}
                    >
                      {Vaule.attributes.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="/contact">
              <p className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact us
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
              {catagoriesData?.map((Vaule) => (
                <Link
                  key={Vaule.id}
                  href={`/category/${Vaule.attributes.name}`}
                >
                  <p className=" first-letter:capitalize text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    {Vaule.attributes.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
