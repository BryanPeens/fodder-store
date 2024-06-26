import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe SDK with your public key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]); // State to store cart items
  const [isLoading, setIsLoading] = useState(false); // Loading state for checkout process
  const [error, setError] = useState(null); // Error state for handling errors during checkout

  // Determine API URL based on environment
  const apiUrl = process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL_PROD 
    : process.env.REACT_APP_API_URL;

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(storedCartProducts);
  }, []);

  // Remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartProducts];
    updatedCart.splice(index, 1);
    setCartProducts(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  // Calculate total price of all items in the cart
  const getTotalPrice = () => {
    if (cartProducts.length === 0) {
      return "$0.00";
    }

    const totalPrice = cartProducts.reduce((total, product) => {
      const productPrice = parseFloat(product.finalPrice.replace("$", ""));
      return total + productPrice;
    }, 0);

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalPrice);
  };

  // Handle checkout process with Stripe
  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      // Prepare line items for Stripe checkout
      const lineItems = cartProducts.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: parseFloat(product.pricePerProduct.replace("$", "")) * 100,
        },
        quantity: product.quantity,
      }));

      // Create a checkout session on the server
      const response = await fetch(
        `${apiUrl}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lineItems }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create checkout session: ${errorMessage}`);
      }

      const session = await response.json();
      // Redirect to Stripe checkout page
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error("Stripe redirect error:", result.error.message);
        setError(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-[600px] p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartProducts.length > 0 ? (
        <div className="space-y-4">
          {/* Render each product in the cart */}
          {cartProducts.map((product, index) => (
            <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-500">
                    Size: {product.selectedSizeLabel}
                  </p>
                  <p className="text-gray-500">Item Price: {product.pricePerProduct}</p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <p className="text-xl font-bold">${product.finalPrice}</p>
              </div>
              {/* Button to remove item from cart */}
              <button
                className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-300"
                onClick={() => removeFromCart(index)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
          {/* Display total price of all items in the cart */}
          <div className="flex justify-between items-center mt-8">
            <p className="text-xl font-semibold">Total Price:</p>
            <p className="text-xl font-bold">{getTotalPrice()}</p>
          </div>
          {/* Buttons for navigation and checkout */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-4">
            <Link to="/products">
              <button className="w-full md:w-auto bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Back to Shopping
              </button>
            </Link>
            <button
              className={`w-full md:w-auto bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mt-4 md:mt-0 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
          {/* Display error message if there is an error during checkout */}
          {error && (
            <div className="text-red-500 mt-4">
              <p>{error}</p>
            </div>
          )}
        </div>
      ) : (
        // Rendered when cart is empty
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
