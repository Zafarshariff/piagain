import React from "react";

const StickyBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 border-t rounded-t-3xl border-gray-300 flex justify-between items-center px-6 py-3 shadow-lg">
      {/* Text Content */}
      <div>
        <h2 className="text-gray-900 font-semibold">Pi Network</h2>
        <p className="text-gray-700 text-sm">Start mining. Easy as Pi!</p>
      </div>

      {/* Download Button */}
      <button className="bg-yellow-500 text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition">
        Download
      </button>
    </div>
  );
};

export default StickyBanner;
