'use client'
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-100 text-sm">
      {/* Top Bar */}
      <div className="w-full flex flex-wrap justify-between items-center px-4 py-2 bg-gray-200 text-gray-600">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <i className="fas fa-phone-alt"></i>
            <span>(123) 555-6789</span>
          </span>
          <span className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <span>email@example.com</span>
          </span>
        </div>
        <p className="hidden md:block text-green-600 font-medium">
          Subscribe and get 80% discount!
        </p>
        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-lg font-bold">Bandage</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white md:static md:flex md:space-x-6 md:block md:bg-transparent`}
        >
          <Link href="/" className="block px-4 py-2 md:py-0 hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 md:py-0 hover:text-green-600">
            About
          </Link>
          <Link href="/shop" className="block px-4 py-2 md:py-0 hover:text-green-600">
            Shop
          </Link>
          <Link href="/contact" className="block px-4 py-2 md:py-0 hover:text-green-600">
            Contact
          </Link>
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="flex items-center hover:text-green-600">
            <i className="fas fa-user"></i>
            <span className="ml-1">Login/Register</span>
          </Link>
          <i className="fas fa-search hover:text-green-600"></i>
          <i className="fas fa-shopping-cart hover:text-green-600"></i>
          <i className="fas fa-heart hover:text-green-600"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
