import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Menu,
  X
} from "lucide-react";

// NavItem component for regular nav items
const NavItem = ({ title, href = "#", onClick = null }) => {
  return (
    <a
      href={href}
      className="text-white hover:underline hover:text-gray-200 px-4 py-2"
      onClick={onClick}
    >
      {title}
    </a>
  );
};

// DropdownNavItem component for items with dropdown menus
const DropdownNavItem = ({ title, children, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  if (isMobile) {
    return (
      <div className="relative">
        <button
          className="flex w-full items-center justify-between text-white hover:underline hover:text-gray-200 px-4 py-2"
          onClick={toggleDropdown}
        >
          {title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>

        {isOpen && (
          <div className="pl-4 border-l border-gray-600">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center text-white hover:underline hover:text-gray-200 px-4 py-2"
        onClick={toggleDropdown}
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-56 bg-white rounded-md shadow-lg z-10">
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ title, href = "#", icon, isMobile = false }) => {
  return (
    <a
      href={href}
      className={`flex items-center hover:underline px-4 py-3 ${
        isMobile ? "text-white hover:text-gray-200" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {title}
      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
};

// Social icon component
const SocialIcon = ({ Icon, href = "#" }) => {
  return (
    <a href={href} className="text-white hover:text-gray-200 mx-2">
      <Icon className="h-5 w-5" />
    </a>
  );
};

// Main Navbar component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all text-black duration-300 py-4 
      ${scrolled ? "bg-[#5a3b8b] shadow-lg" : "bg-transparent"}`}
    >
      <div className="mx-auto px-4 md:px-40">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-12 w-auto">
                <img src="/Pi-Network.png" alt="App Logos" className="h-12" />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <DropdownNavItem title="Pi Blockchain">
              <DropdownItem title="Pi Node" />
              <DropdownItem title="Pi BlockExplorer" />
              <DropdownItem title="Pi Whitepaper" />
            </DropdownNavItem>

            <DropdownNavItem title="Developers">
              <DropdownItem title="Documentation" />
              <DropdownItem title="API Reference" />
              <DropdownItem title="SDK" />
            </DropdownNavItem>

            <NavItem title="About Us" />
            <NavItem title="Blog" />
            <NavItem title="Support" />
          </div>

          {/* Social Icons and Search - Desktop */}
          <div className="hidden md:flex items-center">
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={Instagram} />
            <button className="ml-4 text-white">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center md:hidden">
            <button className="text-white mx-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#5a3b8b] rounded-lg p-4">
            <div className="flex flex-col space-y-2">
              <DropdownNavItem title="Pi Blockchain" isMobile={true}>
                <DropdownItem title="Pi Node" isMobile={true} />
                <DropdownItem title="Pi BlockExplorer" isMobile={true} />
                <DropdownItem title="Pi Whitepaper" isMobile={true} />
              </DropdownNavItem>

              <DropdownNavItem title="Developers" isMobile={true}>
                <DropdownItem title="Documentation" isMobile={true} />
                <DropdownItem title="API Reference" isMobile={true} />
                <DropdownItem title="SDK" isMobile={true} />
              </DropdownNavItem>

              <NavItem title="About Us" onClick={() => setMobileMenuOpen(false)} />
              <NavItem title="Blog" onClick={() => setMobileMenuOpen(false)} />
              <NavItem title="Support" onClick={() => setMobileMenuOpen(false)} />
              
              {/* Social Icons for Mobile */}
              <div className="flex items-center pt-4 border-t border-gray-600">
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Youtube} />
                <SocialIcon Icon={Instagram} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;