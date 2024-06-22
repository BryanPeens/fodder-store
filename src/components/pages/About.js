import React from "react";
import about_bg from "../../assets/images/about-bg.png";
import pellet_bg from "../../assets/images/pellets.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${about_bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center shadow-inner">
          <h1 className="text-center text-white text-4xl md:text-6xl font-bold drop-shadow-lg animate-fadeIn">
            Welcome to <span className="text-yellow-500">NutriSprout</span>
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-2xl mt-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 p-6">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <img
              src={pellet_bg}
              alt="NutriSprout Logo"
              className="rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3 cursor-pointer"
              style={{ boxShadow: "8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.5)" }}
            />
          </div>

          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-yellow-500">NutriSprout</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 shadow-inner p-4 rounded-lg bg-gray-50">
              NutriSprout specializes in premium livestock feed pellets,
              leveraging decades of innovation and expertise in the feed
              industry. Our commitment is to deliver high-quality, nutritionally
              balanced feed solutions that enhance the health and performance of
              livestock across various sectors.
            </p>
            <div className="lg:hidden lg:w-1/3 mb-12 lg:mb-0">
              <img
                src={about_bg}
                alt="NutriSprout Logo"
                className="rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3"
                style={{ boxShadow: "8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.5)" }}
              />
            </div>
            <p className="text-gray-600 text-lg mb-6 shadow-inner p-4 rounded-lg bg-gray-50">
              We draw inspiration from the historical evolution of animal feed
              pelleting, where the need for efficient, transportable feed
              solutions emerged during the industrial revolution. Initially
              developed for war horses, pelletized feed offered advantages like
              reduced dust, increased density, improved palatability, and
              minimized wastage—a legacy we uphold today.
            </p>
            <div className="text-gray-600 text-md mb-6">
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold shadow-md" style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.1)" }}>
                  <i className="fas fa-check"></i>
                </div>
                <p className="ml-4">
                  Space-Saving: Compact pellets save valuable storage space.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold shadow-md" style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.1)" }}>
                  <i className="fas fa-check"></i>
                </div>
                <p className="ml-4">
                  Cost-Effective: Save on storage and long-term expenses.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold shadow-md" style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.1)" }}>
                  <i className="fas fa-check"></i>
                </div>
                <p className="ml-4">
                  Health Benefits: Maintain weight and promote healthier
                  livestock.
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-lg shadow-inner p-4 rounded-lg bg-gray-50">
              Discover why NutriSprout is trusted by farmers and ranchers
              worldwide for its nutritional excellence, sustainable practices,
              and commitment to animal welfare. Our pellets are crafted using
              state-of-the-art technology and adhere to rigorous quality
              standards to ensure optimal performance and health for your
              livestock.
            </p>

            {/* Call to Action Button */}
            <div className="mt-8">
              <Link
                to="/products"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-105"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="container mx-auto flex justify-center md:justify-between items-center text-center md:text-left">
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/NutriSprout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/NutriSprout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-transform duration-300 hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/NutriSprout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-transform duration-300 hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/company/NutriSprout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition-transform duration-300 hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
