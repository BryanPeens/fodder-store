import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const PopupNotification = React.memo(({ onClose, productDetails }) => {
  const hasDetails =
    productDetails &&
    productDetails.name &&
    productDetails.selectedSizeLabel &&
    productDetails.quantity &&
    productDetails.finalPrice &&
    productDetails.pricePerProduct;

  const handleOkClick = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md text-center">
        <p className="text-xl font-semibold text-gray-800">
          {hasDetails ? "Product added!" : "Please select size and quantity."}
        </p>
        {hasDetails && (
          <div className="mt-4 text-left">
            <p className="text-gray-800">{productDetails.name}</p>
            <p className="text-gray-500">Size: {productDetails.selectedSizeLabel}</p>
            <p className="text-gray-500">Quantity: {productDetails.quantity}</p>
            <p className="text-gray-500">Price per Product: ${productDetails.pricePerProduct}</p>
            <p className="text-gray-500">Final Price: ${productDetails.finalPrice}</p>
          </div>
        )}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
            onClick={handleOkClick}
          >
            OK
          </button>
          {hasDetails && (
            <Link to="/products">
              <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition ml-4">
                Continue Shopping
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

export default PopupNotification;
