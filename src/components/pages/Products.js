// Products.js

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

import {
  sproutPelletsProducts,
  freshFodderSproutsProducts,
  sproutingSystemsProducts,
  skeuomorphicButtonGreenCSS,
  skeuomorphicButtonOrangeCSS,
  skeuomorphicCardCSS,
} from "../ProductLogic";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Inject CSS styles for the green button
    const styleSheetCardGreen = document.createElement("style");
    styleSheetCardGreen.type = "text/css";
    styleSheetCardGreen.innerText = skeuomorphicCardCSS;
    document.head.appendChild(styleSheetCardGreen);

    // Inject CSS for green button
    const styleSheetGreen = document.createElement("style");
    styleSheetGreen.type = "text/css";
    styleSheetGreen.innerText = skeuomorphicButtonGreenCSS;
    document.head.appendChild(styleSheetGreen);

    // Inject CSS for orange button
    const styleSheetOrange = document.createElement("style");
    styleSheetOrange.type = "text/css";
    styleSheetOrange.innerText = skeuomorphicButtonOrangeCSS;
    document.head.appendChild(styleSheetOrange);

    // Clean up function to remove styles when component unmounts
    return () => {
      document.head.removeChild(styleSheetGreen);
      document.head.removeChild(styleSheetOrange);
    };
  }, [skeuomorphicButtonGreenCSS, skeuomorphicButtonOrangeCSS]);

  const handleAddToCart = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/details");
  };

  const handleDetailsClick = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // console.log(JSON.parse(localStorage.getItem("selectedProduct")));
        navigate("/details");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-32">
      {/* Sprout Pellets Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-center font-bold text-green-700 mb-4 lg:text-4xl lg:mb-10">
          Sprout Pellets
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sproutPelletsProducts.map((product) => (
            <ProductCard key={product.id} product={product} handleDetailsClick={handleDetailsClick} />
          ))}
        </div>
      </section>

      {/* Fresh Fodder Sprouts Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-center font-bold text-green-700 mb-4 lg:text-4xl lg:mb-10">
          Fresh Fodder Sprouts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {freshFodderSproutsProducts.map((product) => (
            <ProductCardAlternate key={product.id} product={product} handleDetailsClick={handleDetailsClick} />
          ))}
        </div>
      </section>

      {/* Sprouting Systems Section */}
      <section>
        <h2 className="text-3xl text-center font-bold text-green-700 mb-4 lg:text-4xl lg:mb-10">
          Sprouting Systems
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {sproutingSystemsProducts.map((product) => (
            <SingleProductCard key={product.id} product={product} handleDetailsClick={handleDetailsClick} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product, handleDetailsClick }) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative">
      <img
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
        src={product.thumbnail} // Assuming thumbnail is used for grid view
        alt={product.name}
        style={{
          boxShadow:
            "8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.5)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-lg"></div>
      <div className="absolute top-0 left-0 right-0 p-4 flex flex-col items-center space-y-2 rounded-lg">
        <h1 className="text-white font-bold text-lg sm:text-xl drop-shadow-md bg-black bg-opacity-70 p-2 rounded-md text-center border border-white hover:border-orange-300">
          {product.name}
        </h1>
        <p className="text-gray-100 font-bold text-sm sm:text-base drop-shadow-md hidden sm:block text-center">
          {product.description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end space-y-2 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap space-y-2 sm:space-y-0 w-full">
          <span className="text-white font-bold text-lg sm:text-xl drop-shadow-md hidden sm:block text-center">
            {product.price[0]}
          </span>
          <div className="flex flex-col sm:flex-row sm:space-x-2 w-full sm:w-auto mt-2 mb-2 sm:mt-0 sm:mb-0 justify-center">
            <button
              className="skeuomorphic-button-orange my-1 sm:my-0 sm:w-auto flex space-x-2 px-4 py-2 items-center justify-center w-full"
              onClick={() => handleDetailsClick(product)}
            >
              <span className="text-center">Details</span>
              <motion.div
                whileHover={{ scale: 1.2, color: "#9ccf8f" }} // Gold color
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInfoCircle size={24} />
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProductCardAlternate = ({ product, handleDetailsClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="skeuomorphic-card-glass"
    >
      <div className="p-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-700">{product.description}</p>
        {product.price && (
          <p className="text-lg font-bold text-gray-800 mt-2">
            {product.price[0]}
          </p>
        )}
      </div>
      <img
      src={product.thumbnail} // Assuming thumbnail is used for grid view
      alt={product.name}
        className="w-full h-48 object-cover rounded-md shadow-md"
      />
      <div className="p-4 text-center">
        {product.price ? (
          <button
            className="skeuomorphic-button-orange mt-4 flex items-center justify-center w-full"
            onClick={() => handleDetailsClick(product)}
          >
            <span className="text-center mx-3">Details</span>
            <motion.div
              whileHover={{ scale: 1.2, color: "#9ccf8f" }} // Gold color
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInfoCircle size={24} />
            </motion.div>
          </button>
        ) : (
          <Link
            to="/contact"
            className="skeuomorphic-button-green mt-4 flex items-center justify-center w-full"
          >
            Contact Us
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const SingleProductCard = ({ product, handleDetailsClick }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:cursor-pointer mb-8"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative">
      <img
        className="w-full h-64 sm:h-80 object-cover object-center rounded-lg"
        src={product.image}
        alt={product.name}
        style={{
          boxShadow:
            "8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.5)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent p-4 flex flex-col justify-end rounded-lg">
        <h1 className="text-white font-semibold text-base sm:text-lg mb-2">
          {product.name}
        </h1>
        {/* Conditional rendering based on screen size */}
        <p className="text-gray-300 mb-2 text-sm sm:text-base lg:w-[85%] sm:w-full hidden sm:block">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-0">
            {product.price}
          </span>
          <button
            className="skeuomorphic-button-orange flex space-x-2 px-4 py-2 items-center justify-center w-full sm:w-auto"
            onClick={() => handleDetailsClick(product)}
          >
            <span className="text-center">Details</span>
            <motion.div
              whileHover={{ scale: 1.2, color: "#9ccf8f" }} // Gold color
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInfoCircle size={24} />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Products;
