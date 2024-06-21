import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import PopupNotification from "../components/PopupNotification";
import ErrorMessage from "../components/ErrorMessage";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Details = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeLabel, setSelectedSizeLabel] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductFromStorage = async () => {
      try {
        const storedProduct = JSON.parse(
          localStorage.getItem("selectedProduct")
        );
        if (storedProduct) {
          setProduct(storedProduct);
        } else {
          throw new Error("Product not found in localStorage.");
        }
      } catch (error) {
        console.error("Error fetching product:", error.message);
        setError("Error fetching product. Please try again later.");
      }
    };

    fetchProductFromStorage();
  }, []);

  const decrementQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateFinalPrice(selectedSize, quantity - 1);
    }
  }, [quantity, selectedSize]);

  const incrementQuantity = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateFinalPrice(selectedSize, quantity + 1);
  }, [quantity, selectedSize]);

  const handleSizeSelect = useCallback(
    (size, label) => {
      setSelectedSize(size);
      setSelectedSizeLabel(label);
      setSelectedPrice(product.price[size]);
      updateFinalPrice(size, quantity);
    },
    [product, quantity]
  );

  const updateFinalPrice = useCallback(
    (size, quantity) => {
      if (product && product.price && product.price[size]) {
        const price = parseFloat(product.price[size].replace(/[^0-9.-]+/g, ""));
        setFinalPrice(price * quantity);
      }
    },
    [product]
  );

  const handleAddToCart = useCallback(() => {
    if (!selectedSize || quantity <= 0) {
      setShowPopup(true);
      return;
    }

    const priceString = selectedPrice || product.price[0];
    const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    const calculatedFinalPrice = price * quantity;
    setFinalPrice(calculatedFinalPrice.toFixed(2));

    const newProduct = {
      name: product.name,
      selectedSizeLabel: selectedSizeLabel,
      quantity: quantity,
      finalPrice: calculatedFinalPrice.toFixed(2),
    };

    try {
      let existingCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
      existingCart.push(newProduct);
      localStorage.setItem("cartProducts", JSON.stringify(existingCart));
      console.log("Product saved to localStorage:", newProduct);
    } catch (error) {
      console.error("Error saving product to localStorage:", error.message);
    }

    setShowPopup(true);
    setProductDetails(newProduct);
  }, [selectedSize, quantity, selectedPrice, product, selectedSizeLabel]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    setProductDetails(null);
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!product) {
    return null;
  }

  return (
    <section className="flex flex-col lg:flex-row bg-white rounded-3xl p-4 md:p-10 shadow-2xl max-w-7xl mx-auto my-10 lg:my-20">
      <div className="relative lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
        <div className="relative bg-gray-200 rounded-3xl overflow-hidden shadow-lg w-full h-72 lg:h-full mb-4">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            src={
              selectedSize ? product.images[selectedSize] : product.thumbnail
            }
            alt={selectedSizeLabel}
          />
          {selectedSizeLabel && (
            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold">
                {selectedSizeLabel}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="lg:w-1/2 p-4 md:p-10 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 mb-2 sm:mb-4">
            {product.name}
          </h1>
          <div className="text-red-500 text-xl sm:text-2xl md:text-4xl font-semibold mb-4 sm:mb-6">
            {selectedPrice || product.price[0]}
          </div>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Select a Size
            </h3>
            <div className="flex gap-4">
              {Object.keys(product.images).map((size) => {
                let label = "";
                if (size === "0")
                  label = "Small - 25KG" + " " + product.price[0];
                else if (size === "1")
                  label = "Medium - 50KG" + " " + product.price[1];
                else if (size === "2")
                  label = "Large - 100KG" + " " + product.price[2];

                return (
                  <button
                    key={size}
                    className={`flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full focus:outline-none border-2 ${
                      selectedSize === size
                        ? "border-gray-800"
                        : "border-transparent"
                    }`}
                    onClick={() => handleSizeSelect(size, label)}
                  >
                    <img
                      src={product.images[size]}
                      alt={`${label} size`}
                      className="h-12 w-12 object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Quantity
            </h3>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-gray-400 transition"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="text-md sm:text-lg md:text-xl">{quantity}</span>
              <button
                className="bg-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-gray-400 transition"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Description
            </h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <button
            className="flex items-center justify-center w-full bg-blue-500 text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-blue-600 active:transform active:scale-95 transition-transform duration-300 mb-2 sm:mb-0"
            onClick={handleAddToCart}
          >
            <span className="mr-2">Add</span>
            <motion.div
              whileHover={{ scale: 1.2, color: "#FFD700" }} // Gold color
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlineAddShoppingCart size={24} />
            </motion.div>
          </button>
          <Link to="/cart" className="w-full sm:ml-0 sm:my-2">
            <button className="flex items-center justify-center w-full bg-green-500 text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-green-600 active:transform active:scale-95 transition-transform duration-300 mb-2 sm:mb-0 sm:ml-2">
              View
              <motion.div
                whileHover={{ scale: 1.2, color: "#FFD700" }} // Gold color
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaShoppingCart className="ml-2" />
              </motion.div>
            </button>
          </Link>
          <Link to="/products" className="w-full sm:ml-0 sm:my-2 lg:ml-2">
            <button className="flex items-center justify-center w-full bg-gray-500 text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-gray-600 active:transform active:scale-95 transition-transform duration-300 mb-2 sm:mb-0 sm:ml-2">
              <span className="mr-2">Back</span>
              <motion.div
                whileHover={{ scale: 1.2, color: "#FFD700" }} // Gold color
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TiArrowBack size={24} />
              </motion.div>
            </button>
          </Link>
        </div>
      </div>

      {showPopup && (
        <PopupNotification
          onClose={closePopup}
          productDetails={productDetails}
        />
      )}
    </section>
  );
};

export default Details;
