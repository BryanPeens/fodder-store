import React from "react";
import horse from "../assets/images/horse.png";
import { Link } from "react-router-dom";
import InfoSection from "../components/InfoSection.js";
import "../assets/animations.css";

const Header = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-300 via-green-600 to-green-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-600 to-green-950 opacity-75 animate-gradient"></div>
        <div className="container mx-auto px-4 py-20 lg:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in font-bebas">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-800 animate-pulse transform-cpu">
                  Revolutionize
                </span>
                <span className="block mt-2">Livestock Nutrition with Sprout Pellets</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8 animate-fade-in">
                Discover the future of livestock feed with our Sprout pellets, a unique blend of barley sprouts, alfalfa, and oat hay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                {[
                  "Space-Saving: Compact pellets save valuable storage space.",
                  "Cost-Effective: Save on storage and long-term expenses.",
                  "Health Benefits: Maintain weight and promote healthier livestock.",
                  "Sustainability: Produced using eco-friendly methods."
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center shadow-inner p-4 rounded-lg bg-green-600 animate-bounce transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                    style={{
                      boxShadow: "inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.5)"
                    }}
                  >
                    <svg
                      className="w-6 h-6 mr-3 text-green-300 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-8 block text-center">
                <button className="skeuomorphic-button-green w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 animate-gradient text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-yellow-500 rounded-full border-opacity-95 border-t-8 -z-20 transform skew-x-3 skew-y-3"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-yellow-300 rounded-full border-opacity-65 border-t-8 -z-20 transform skew-x-2 skew-y-2"></div>
            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 border-yellow-500 rounded-full border-opacity-95 border-t-8 -z-20 transform skew-x-3 skew-y-3"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 border-yellow-300 rounded-full border-opacity-60 border-t-8 -z-20 transform skew-x-2 skew-y-2"></div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={horse}
                alt="Pellets"
                className="animate-fade-in max-w-full hover:scale-105 transition-transform duration-300 rounded-lg "

              />
            </div>
          </div>
        </div>
      </section>
      <InfoSection />
    </div>
  );
};

export default Header;


const skeuomorphicButtonGreenCSS = `
  .skeuomorphic-button-green {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #93C572, #5E8F46, #447C39);
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: white;
  }
  .skeuomorphic-button-green:hover {
    background: linear-gradient(to right, #5E8F46, #447C39, #93C572);
    transform: scale(1.05);
  }
  .skeuomorphic-button-green:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;

// Inject CSS styles for the green button
const styleSheetGreen = document.createElement("style");
styleSheetGreen.type = "text/css";
styleSheetGreen.innerText = skeuomorphicButtonGreenCSS;
document.head.appendChild(styleSheetGreen);