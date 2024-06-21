import React, { useState } from "react";
import { Link } from "react-router-dom";
import tempImage from "../assets/images/pellets.png";

const InfoSection = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <section className="flex flex-col justify-center text-gray-900 min-h-screen antialiased bg-gray-100">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Link to="/services" className="relative block group text-center">
              <div
                className="absolute inset-0 bg-green-500 hidden sm:visible md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
                style={{
                  boxShadow:
                    "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
                }}
              ></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  className="absolute shadow-2xl inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out rounded-lg"
                  src={tempImage}
                  alt="Blog post"
                  style={{
                    boxShadow:
                      "8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.5)",
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4 rounded-lg">
                  <h1 className="text-white text-4xl font-bold">
                    <span className="text-yellow-500">NutriSprout</span> Pellets
                  </h1>
                  <h2 className="text-white text-2xl font-semibold">
                    Made with care in mind!
                  </h2>
                </div>
              </figure>
            </Link>

            <div>
              <header>
                <div className="mb-3">
                  <ul className="flex flex-wrap text-sm font-medium -m-1">
                    <li className="m-1 flex-1">
                      <Link
                        className="inline-flex items-center justify-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out w-full shadow-md"
                        to="/products"
                        style={{
                          boxShadow:
                            "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="m-1 flex-1">
                      <Link
                        className="inline-flex items-center justify-center text-gray-100 py-1 px-3 rounded-full bg-green-700 hover:bg-green-800 transition duration-150 ease-in-out w-full shadow-md"
                        to="/about"
                        style={{
                          boxShadow:
                            "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <h3 className="text-lg lg:text-xl font-bold leading-tight mb-2">
                  <Link
                    className="hover:text-green-600 transition duration-150 ease-in-out"
                    to="#"
                  >
                    Revolutionize Livestock Nutrition with Fodder Pellets
                  </Link>
                </h3>
              </header>
              <p className="text-base text-gray-700 leading-relaxed flex-grow">
                Modern fodder pellet systems revolutionize livestock nutrition
                by providing a sustainable solution for feed-supply instability.
                Fodder pellets offer a consistent supply of fresh, green, and
                nutrient-packed sprouted grains every day, regardless of weather
                or season.
              </p>
              <footer className="flex items-center mt-4">
                <div>
                  <Link
                    className="font-medium text-green-600 hover:text-green-500 transition duration-150 ease-in-out"
                    to="#"
                  >
                    NutriSprout
                  </Link>
                  <span className="text-gray-700"> - </span>
                  <span className="text-gray-500">June 12, 2024</span>
                </div>
                <Link
                  to="/products"
                  className="ml-auto bg-gray-800 text-gray-50 text-sm py-2 px-4 rounded-md shadow-lg flex items-center hover:bg-green-500 transition-colors duration-300"
                  style={{
                    boxShadow:
                      "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  View Store
                </Link>
              </footer>
            </div>
          </article>
        </div>
      </section>

      {open && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
          <Link
            to="/products"
            className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between items-center hover:bg-green-500 transition-colors duration-300"
            style={{
              boxShadow:
                "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
            }}
          >
            <div className="flex items-center">
              <span className="mr-2 animate-pulse mix-blend-plus-darker">
                👉
              </span>
              <span className="hover:underline">Shop Now</span>
            </div>
            <button
              className="text-gray-500 hover:text-gray-400 ml-5"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 flex-shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
