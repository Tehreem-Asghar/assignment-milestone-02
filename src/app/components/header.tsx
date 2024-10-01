"use client";
import Link from "next/link";
import { FiShoppingCart, FiAlignJustify } from "react-icons/fi";
import { PiBookOpenTextFill } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [open, setopen] = useState(false);

  const toggleOpen = () => {
    setopen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 h-16 w-full p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex space-x-3 items-center">
        <Link href="/cart">
          <FiShoppingCart className="h-8 w-8 md:hidden lg:hidden text-white cursor-pointer hover:text-yellow-300 transition duration-300" />
        </Link>
        <Link href="/">
          <PiBookOpenTextFill className="h-10 w-10 text-white cursor-pointer hover:text-yellow-300 transition duration-300" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button onClick={toggleOpen} className="md:hidden lg:hidden">
        {open ? (
          <FaTimes className="text-white text-3xl" />
        ) : (
          <FiAlignJustify className="text-white text-3xl" />
        )}
      </button>

      {/* Links for Large Screens */}
      <div className="hidden md:flex lg:flex space-x-6 items-center text-white text-xl">
        <Link
          href="/"
          className="hover:text-yellow-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/books"
          className="hover:text-yellow-300 transition duration-300"
        >
          Books
        </Link>
        <Link
          href="/about"
          className="hover:text-yellow-300 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-yellow-300 transition duration-300"
        >
          Contact
        </Link>
        <Link href="/cart">
          <FiShoppingCart className="h-8 w-8 hover:text-yellow-300 transition duration-300" />
        </Link>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-white bg-opacity-60 z-50 p-6 flex flex-col space-y-6 items-center md:hidden">
          <button onClick={toggleOpen} className="self-end">
            <FaTimes className="text-red-600 text-3xl" />
          </button>
          <Link
            href="/"
            className="text-red-600 text-2xl hover:text-red-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/books"
            className="text-red-600 text-2xl hover:text-red-700 transition duration-300"
          >
            Books
          </Link>
          <Link
            href="/about"
            className="text-red-600 text-2xl hover:text-red-700 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-red-600 text-2xl hover:text-red-700 transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
