import { Lora } from "next/font/google"; // Import Lora font
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarResponsive from "./components/NavBarResponsive";

const lora = Lora({
  variable: "--font-lora", // Custom variable name for the font
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the font weights you need
});

export const metadata = {
  title: "Amen Hospital",
  description: "The official landing website of Amen Hospital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tabIcon.ico" className=" rounded-full" />
      </head>
      <body
        className={`${lora.variable} antialiased`} // Apply the Lora font here
      >
        {/* <Navbar /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
