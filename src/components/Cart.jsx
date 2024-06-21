import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(storedCartProducts);
  }, []);

  // Function to remove a product from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartProducts];
    updatedCart.splice(index, 1);
    setCartProducts(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

// Calculate total price and format as currency
const getTotalPrice = () => {
  if (cartProducts.length === 0) {
    return "$0.00"; // Return default value if cart is empty
  }

  // Calculate total price by iterating through cartProducts
  const totalPrice = cartProducts.reduce((total, product) => {
    const productTotal = product.finalPrice * product.quantity;
    return total + productTotal;
  }, 0);

  // Format total price as currency
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalPrice);
};


  return (
    <div className="max-w-7xl mx-auto mb-[600px] p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartProducts.length > 0 ? (
        <div className="space-y-4">
          {cartProducts.map((product, index) => (
            <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-500">Size: {product.selectedSizeLabel}</p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <p className="text-xl font-bold">${product.finalPrice}</p>
              </div>
              <button
                className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-300"
                onClick={() => removeFromCart(index)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8">
            <p className="text-xl font-semibold">Total Price:</p>
            <p className="text-xl font-bold">{getTotalPrice()}</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-4">
            <Link to="/products">
              <button className="w-full md:w-auto bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Back to Shopping
              </button>
            </Link>
            <Link to="/checkout">
              <button className="w-full md:w-auto bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mt-4 md:mt-0">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-gray-500">
          <p>Your cart is empty.</p>
          <Link to="/products" className="text-blue-500 hover:underline">
            Go back to shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
