// productLogic.js

import pellets_image from "../assets/images/pellets.png";
import systems_image from "../assets/images/sproutingsystem.png";
import fod1 from "../assets/images/fod-1.png";
import fod2 from "../assets/images/bales.png";

// Define products for each category
export const sproutPelletsProducts = [
  {
    id: 1,
    name: "Pure Sprout Pellet",
    thumbnail: pellets_image,
    images: [pellets_image, pellets_image, pellets_image],
    description: "Pure Barley Fodder Pellet",
    price: [22.99, 42.99, 62.99],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
  },
  {
    id: 2,
    name: "Grazing Mix Pellet",
    thumbnail: pellets_image,
    images: [pellets_image, pellets_image, pellets_image],
    description: "Alfalfa, Corn, Oats, Barley Sprout Pellet",
    price: [23.99, 42.99, 62.99],
    brand: "NutriBlend",
    sku: "BBMP23",
    weight: 1.5,
    dimensions: {
      width: 20,
      height: 10,
      depth: 25,
    },
  },
  {
    id: 3,
    name: "Sprout, Alfalfa Pellet",
    thumbnail: pellets_image,
    images: [pellets_image, pellets_image, pellets_image],
    description: "Barley Sprout, Alfalfa Pellet",
    price: [24.99, 42.99, 62.99],
    brand: "GreenLife",
    sku: "SAAP789",
    weight: 1.8,
    dimensions: {
      width: 22,
      height: 12,
      depth: 27,
    },
  },
  {
    id: 4,
    name: "Complete Mix Pellet",
    thumbnail: pellets_image,
    images: [pellets_image, pellets_image, pellets_image],
    description: "Corn, Barley Sprout, Soybean, Oats, Molasses Pellet",
    price: [25.99, 42.99, 62.99],
    brand: "FarmFresh",
    sku: "CMXP456",
    weight: 2.2,
    dimensions: {
      width: 25,
      height: 15,
      depth: 30,
    },
  },
];

export const freshFodderSproutsProducts = [
  {
    id: 5,
    name: "Barley Sprouts or Fodder Mats",
    thumbnail: fod1,
    images: [fod1, fod1, fod1],
    description:
      "Barley grains are sprouted in a controlled environment to produce fresh, green fodder. This method involves soaking the grains in water and then allowing them to germinate and grow into small plants, which are then fed to the livestock.",
    price: [23.99, 42.99, 62.99],
    brand: "FarmFresh",
    sku: "BSPR567",
    weight: 2.2,
    dimensions: {
      width: 25,
      height: 15,
      depth: 30,
    },
  },
  {
    id: 6,
    name: "Barley Hay",
    thumbnail: fod2,
    images: [fod2, fod2, fod2],
    description:
      "Barley plants undergo a process similar to that of traditional hay: they are meticulously cut at the right stage of growth, then carefully dried to preserve their nutritional value, and finally baled into compact bundles for easy handling, storage, and transportation.",
    price: [23.99, 42.99, 62.99],
    brand: "FarmFresh",
    sku: "BHAY678",
    weight: 2.2,
    dimensions: {
      width: 25,
      height: 15,
      depth: 30,
    },
  },
];

export const sproutingSystemsProducts = [
  {
    id: 7,
    name: "Sprouting Systems",
    image: systems_image,
    description:
      "Our sprouting systems provide advanced hydroponic solutions for commercial and home growers. They maximize nutrient uptake, accelerate growth, and ensure high-quality yields of fresh, nutritious sprouts. Ideal for soil-free cultivation, our space-saving designs are easy to use and perfect for producing healthy animal feed.",
    price: [299.99, 499.99, 699.99], // Adding a price for consistency
    brand: "HydroGrow",
    sku: "SPRTSYS01",
    weight: 15.0,
    dimensions: {
      width: 100,
      height: 50,
      depth: 50,
    },
  },
];

// CSS for green button
export const skeuomorphicButtonGreenCSS = `
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

// CSS for orange button
export const skeuomorphicButtonOrangeCSS = `
  .skeuomorphic-button-orange {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #F8B37D, #E9884C, #D56E2B);
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: white;
  }
  .skeuomorphic-button-orange:hover {
    background: linear-gradient(to right, #E9884C, #D56E2B, #F8B37D);
    transform: scale(1.05);
  }
  .skeuomorphic-button-orange:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;

export const skeuomorphicCardCSS = `
  .skeuomorphic-card-glass {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #d2e1d6, #bbc5c3, #9baea9);
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: #404040;
  }
  .skeuomorphic-card-glass:hover {
    background: linear-gradient(to right, #bbc5c2, #9baea7, #d2e1d2);
    transform: scale(1.05);
  }
  .skeuomorphic-card-glass:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;
