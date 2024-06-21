import React from "react";
import freshFodderImage from "../assets/images/fodder.jpeg";
import sproutPelletsImage from "../assets/images/pellets.png";
import sproutingSystemsImage from "../assets/images/foddersystem.png";

const services = [
  {
    title: "Fresh Fodder Sprouts",
    description:
      "Our fresh fodder sprouts provide optimal nutrition for livestock, grown daily to ensure peak freshness and quality. Click here to learn more.",
    icon: freshFodderImage,
    link: "#",
  },
  {
    title: "Sprout Pellets",
    description:
      "Our sprout pellets offer a convenient and space-saving solution for feeding livestock, made from a blend of barley sprouts, alfalfa, and oat hay. Click here to learn more.",
    icon: sproutPelletsImage,
    link: "/products",
  },
  {
    title: "Sprouting Systems",
    description:
      "Our sprouting systems range from small-scale Table-Top models to large Commercial Systems, perfect for any size farming operation. Click here to learn more.",
    icon: sproutingSystemsImage,
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-500">
          Our Feeds & Production Systems
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-pointer">        
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 bg-white overflow-hidden"
            >
            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-yellow-500 rounded-full border-opacity-25 border-t-8 -z-10"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-yellow-300 rounded-full border-opacity-25 border-t-8 -z-10"></div>

              <img
                src={service.icon}
                alt={service.title}
                className="mx-auto w-42 h-42 object-contain rounded-full border border-gray-300 hover:rounded-none transition-all duration-300 "
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-500 mb-2 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 font-semibold">{service.description}</p>
              <a
                href={service.link}
                className="inline-block text-orange-500 hover:text-yellow-500 transition-colors group skeuomorphic-button-green"
              >
                Learn more{" "}
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



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
