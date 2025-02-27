import React from "react";

const DownloadSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-purple-700 to-purple-900 px-12 md:px-32 py-16  text-white">
      {/* Left Side - Phone Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/mobile1.webp"
          alt="Pi Network Mobile App"
          className="w-80 lg:w-96 drop-shadow-2xl"
        />
      </div>

      {/* Right Side - Text & Buttons */}
      <div className="w-full lg:w-1/2 text-start md:text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 leading-tight">
          Download the mobile app to start mining today! Join now.
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Keep your money! Mining Pi is free. All you need is an invitation
          from an existing trusted member on the network. If you have an
          invitation, you can download the mobile app below.
        </p>

        {/* Download Buttons */}
        <div className="mt-6 flex md:flex-row gap-6 flex-col  items-center md:items-start">
          <img
            src="/googleplaybtn.png"
            alt="Google Play"
            className="w-60 md:w-40 cursor-pointer"
          />
          <img
            src="/applestorebtn.png"
            alt="App Store"
            className="w-60 md:w-40 cursor-pointer m-0"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
