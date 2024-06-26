import { Inter } from "next/font/google";
import "./globals.css";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Accernity marketing",
  description: "Accernity marketing",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <link rel="icon" href="/hero.jpg" sizes="any" /> */}

        <Toaster></Toaster>
        <div className=" h-[100vh] w-[100%]  flex flex-col justify-between">
          <div>
            <Navbar2></Navbar2>
            {children}
          </div>
          <div>
            <Footer2></Footer2>
          </div>
        </div>
      </body>
    </html>
  );
}
