import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion library for animations
import { Link } from "react-router-dom";
import contactIllustration1 from "../../assets/images/coming.png";
import contactIllustration2 from "../../assets/images/coming.png";
import contactIllustration3 from "../../assets/images/coming.png";
import GridComponent from "../GridComponent";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images for slideshow effect
  const images = [
    contactIllustration1,
    contactIllustration2,
    contactIllustration3,
  ];

  // Function to handle image change
  const changeImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://getform.io/f/zbzkxdga", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section className="relative overflow-hidden bg-green-900 text-white py-20 sm:py-5 lg:py-40">
      <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-yellow-500 rounded-full border-opacity-95 border-t-8 z-10"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-yellow-300 rounded-full border-opacity-65 border-t-8 z-10"></div>
      <div className="absolute -top-40 -right-0 w-80 h-80 border-4 border-yellow-500 rounded-full border-opacity-95 border-t-8 z-10"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 border-4 border-yellow-300 rounded-full border-opacity-60 border-t-8 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-900 via-green-700 to-green-400 opacity-75 animate-gradient"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900 via-green-700 to-green-500 opacity-75 animate-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto bg-white p-3 md:p-6 lg:p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
                Discover how we can assist you.
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => handleChange(e, setName)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => handleChange(e, setEmail)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={(e) => handleChange(e, setPhone)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => handleChange(e, setMessage)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full skeuomorphic-button-green z-20"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
          <div className="justify-center lg:justify-end relative overflow-hidden h-full">
            <GridComponent />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center lg:hidden">
        <Link
          to="/about"
          className="inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Contact;