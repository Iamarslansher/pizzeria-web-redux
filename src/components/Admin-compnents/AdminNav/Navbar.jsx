import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Package, Truck, CheckCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "All Orders",
      icon: <LayoutGrid className="w-5 h-5" />,
      href: "/admin-dashboard",
    },
    {
      label: "Processing",
      icon: <Package className="w-5 h-5" />,
      href: "on-processing",
    },
    {
      label: "On Delivery",
      icon: <Truck className="w-5 h-5" />,
      href: "on-delivery",
    },
    {
      label: "Completed",
      icon: <CheckCircle className="w-5 h-5" />,
      href: "completed",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md  w-full ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-2xl font-black text-red-600 tracking-tight">
            PIZZERIA
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-red-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors duration-300 group"
            >
              {link.icon}
              <span className="font-medium group-hover:text-red-600">
                {link.label}
              </span>
            </Link>
          ))}
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            Dashboard
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
            fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
        >
          <div className="flex flex-col h-full pt-20 px-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={toggleMenu}
                className="flex items-center gap-4 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.icon}
                <span className="text-lg font-medium">{link.label}</span>
              </Link>
            ))}
            <button
              onClick={toggleMenu}
              className="w-full text-left flex items-center gap-4 p-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg"
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="text-lg font-medium">Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
