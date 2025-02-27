import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import QuoteInfo from "./components/QuoteInfo.jsx"
import Features from "./components/Features.jsx"
import DownloadApp from "./components/DownloadApp.jsx"
import Footer from "./components/Footer.jsx"
import StickyBanner from "./components/StickyBanner.jsx"

export default function App() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <QuoteInfo />
      <Features />
      <DownloadApp/>
      <Footer />
      <StickyBanner />
    </div>
  );
}