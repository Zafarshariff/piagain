import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Top Section with Wave */}
      <div className="bg-[rgba(120,58,140)] text-white text-center relative">
        <h2 className="text-2xl sm:text-3xl font-bold py-10" style={{lineHeight:"2.5rem"}} >
          Mining crypto is hard. <br />
          Investing in crypto is risky. <br />
          <span className="font-bold">
            Too many of us are left out of the cryptocurrency revolution...
          </span>
        </h2>
        <img src="/wavedivider.png" className="w-full" alt="" />
      </div>

      <div className="relative flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto gap-6 py-12">
        <div className="text-start w-full md:w-1/2 p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#8a348e] text-start p-0">
            Pi makes crypto mining easy.
          </h1>
          <p className="mt-4 text-gray-700">
            Breakthrough tech allows you to mine Pi on your phone without
            draining your battery.
          </p>
          <button className="mt-6 bg-[#8a348e] text-white px-6 py-3 rounded-md text-md md:text-lg font-semibold flex items-center gap-2 hover:bg-purple-800 transition">
            Learn The Tech Behind Pi →
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="/featuresectionmobile.png"
            alt="Crypto Mining"
            className="w-[250px] sm:w-[350px] lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
