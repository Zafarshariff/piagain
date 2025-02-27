import React from "react";
import { Link } from "react-router-dom";

const PiBrowser = () => {
  const menuItems = [
    { name: "Chat", icon: "/validateicon1.webp" },
    { name: "Wallet", icon: "/validateicon2.webp" },
    { name: "Brainstorm", icon: "/validateicon3.webp" },
    { name: "Mine", icon: "/validateicon4.webp" },
    { name: "Blockchain", icon: "/validateicon5.webp" },
    { name: "Develop", icon: "/validateicon6.webp" },
    { name: "KYC", icon: "/validateicon7.webp" },
    { name: "Fireside", icon: "/validateicon8.webp" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Navbar */}
      <nav className="w-full bg-[rgba(112,61,146)] text-white flex justify-center p-2 text-lg font-semibold">
        Home <img src="/logo.webp" className="w-6 h-auto ml-2" alt="" />
      </nav>

      {/* Logo and Title */}
      <div className="mt-10 text-center flex align-center items-center flex-col">
        <img src="/logo.webp" className="w-40 h-auto" alt="" />
        <h2 className="text-orange-500 text-lg mt-2">
          Welcome to the Pi Browser
        </h2>
      </div>

      {/* Grid Menu */}
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2 mt-6">
        {menuItems.map((item, index) => (
          <Link to={`/pi/unlock-wallet?id=${item.name}`}>
            <div
              key={index}
              className="flex flex-col items-center justify-center  rounded-xl transition p-2"
            >
              <span className="text-3xl p-2">
                <img className="h-16 w-16" src={item.icon} alt="" />
              </span>
              <span className="text-sm mt-2">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <button className="mt-10 px-6 py-2 bg-[rgba(112,61,146)] text-white rounded-lg shadow hover:bg-[rgba(112,61,146)] transition">
        Explore the Testnet Ecosystem
      </button>
    </div>
  );
};

export default PiBrowser;
