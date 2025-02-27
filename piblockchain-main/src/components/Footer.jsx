import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#252525] font-medium text-gray-100 pb-40 p-16 px-8 md:px-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
      {/* Left Side Links */}
      <div className="flex gap-8 md:gap-36=2 flex-col md:flex-row">
        <div className="flex flex-col gap-4 md:gap-8 text-md">
          <a href="#" className="hover:underline">
            Pi Whitepaper
          </a>
          <a href="#" className="hover:underline">
            Support & FAQ
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-col gap-4 md:gap-8 text-md mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Developer Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Pi Trademark
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-6 md:mt-0 flex items-center gap-2">
        <img src="/Pi-Network.png" className="h-16 w-auto" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
