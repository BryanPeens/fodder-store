import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className="hover:text-green-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-500">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-500">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-500">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
            <ul>
              <li>Email: info@nutrisprout.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>
                <a href="#" className="hover:text-green-500">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-4">
              <input type="email" placeholder="Your Email" className="bg-gray-200 px-4 py-2 w-full rounded-md focus:outline-none" />
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-2 transition duration-300 ease-in-out">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 NutriSprout. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
