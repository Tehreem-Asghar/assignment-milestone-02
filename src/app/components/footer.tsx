import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-gray-900 text-white py-8'>
      {/* Back to Top Button */}
      <div className='text-center mb-6'>
        <Link href={'#'} className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300">
          Back To Top
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className='flex justify-center space-x-6 text-sm lg:text-xl font-medium mb-6'>
        <Link href={'/'} className="hover:text-blue-400 transition-colors duration-300">Home</Link>
        <Link href={'/books'} className="hover:text-blue-400 transition-colors duration-300">Books</Link>
        <Link href={'/about'} className="hover:text-blue-400 transition-colors duration-300">About</Link>
        <Link href={'/contact'} className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
      </div>

      {/* Copyright and Legal Links */}
      <div className='text-center text-xs lg:text-sm space-y-2 mb-6'>
        <p>© 2024 Bookstore. All rights reserved.</p>
        <p>
          <Link href={'#'} className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link> | 
          <Link href={'#'} className="hover:text-blue-400 transition-colors duration-300"> Terms & Conditions</Link>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us:</h3>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300 text-3xl"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/Tehreem1794730?t=IdwZfgI0lQAsXiPe7KfSJQ&s=08"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300 text-3xl"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/tehreem412?igsh=eGs4OWtsZ3Fwcnc2"
            target="_blank"
            className="text-pink-600 hover:text-pink-700 transition-colors duration-300 text-3xl"
          >
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;
