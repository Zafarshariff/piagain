import React, { useState, useEffect } from "react";
import VideoPopup from "./PopupVideoPlayer.jsx";
import { Link } from "react-router-dom";

const PiHeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="w-full">
      <div className="relative w-full text-white overflow-hidden bg-[url('/background-hero-section.jpg')] bg-left-top bg-no-repeat bg-cover ">
        <div className="mx-auto h-full md:px-12 md:pb-32 p-0 flex flex-col mt-48 justify-center md:flex-row items-center gap-4 md:gap-12 w-[80vw]">
          <div className="w-full md:w-2/3 flex flex-col gap-2">
            <p className="text-3xl md:text-5xl font-bold  md:leading-[4.5rem]">
              The First Digital Currency You Can Mine on Your Phone
            </p>
            <p
              className="text-lg md:text-2xl mt-4 font-semibold"
              style={{ lineHeight: "2.4rem" }}
            >
              Start mining Pi cryptocurrency today with our free, energy-light
              mobile app!
            </p>
            <Link to={"/pi/validate"}>
            <button 
              className="cursor-pointer text-lg scale-[1.2] mt-2 translate-x-6 hover:bg-mt-8 hover:bg-[rgba(250, 193, 0, 0.75)] hover:text-white bg-transparent border-2 w-[200px] h-12"
              style={{
                borderColor: "rgba(250, 193, 0, 0.75)",
                color: "rgb(250, 193, 0)",
                visibility: "visible",
              }}
            >
              Activate P2P
            </button>
              </Link>
          </div>
          <div
            className="w-2/3 relative flex justify-end items-end"
            onClick={() => setShowPlayer(true)}
          >
            {showPlayer ? (
              <VideoPopup
                videoUrl={
                  "https://www.youtube-nocookie.com/embed/MsOaC61cR3U?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1"
                }
                onClose={() => setShowPlayer(false)}
              />
            ) : (
              ""
            )}

            {/* Desktop View - Image with Play Button */}
            <div className="relative hidden md:block">
              <div className="h-[60vh]">
                <img
                  className="w-auto h-full"
                  src="/heromobile.webp"
                  alt="Pi Network App on Phone"
                />
              </div>
              {/* Play button with animated circle */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`relative flex items-center justify-center cursor-pointer group`}
                >
                  {/* Outer animated circle */}
                  <div
                    className={`absolute w-16 h-16 rounded-full border-2 border-white ${
                      isHovering ? "animate-ping opacity-30" : "opacity-60"
                    }`}
                  ></div>
                  {/* Play button circle */}
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-purple-950 ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View - Direct YouTube Embed */}
            <div className="w-[80vw] my-6 md:hidden flex items-center justify-center">
              <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/MsOaC61cR3U?rel=0&amp;showinfo=0"
                  title="Pi Network Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiHeroSection;
