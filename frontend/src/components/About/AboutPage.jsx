import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <motion.h1
          className="text-5xl font-extrabold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text section with animation */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Welcome to MyShop
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At <span className="font-bold text-teal-600">MyShop</span>, we are
              dedicated to providing you with the best online shopping
              experience. From trendy fashion to the latest tech gadgets, we have
              everything you need—all in one place.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our mission is simple: to bring you top-quality products at
              unbeatable prices. We work directly with trusted suppliers to
              ensure that every item in our store meets our high standards of
              quality and affordability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether you're shopping for yourself or looking for the perfect
              gift, we have a wide range of products designed to fit your needs
              and lifestyle.
            </p>
          </motion.div>

          {/* Image section with shopping image */}
          <motion.div
            className="flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="shoping.jpg"
              alt="Shopping"
              className="rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110"
            />
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.h3
            className="text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h3>
          <ul className="list-none text-lg text-gray-600 mx-auto max-w-lg space-y-4">
            <motion.li
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg
                className="w-6 h-6 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Wide selection of products from trusted brands</span>
            </motion.li>
            <motion.li
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg
                className="w-6 h-6 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Affordable pricing and great deals</span>
            </motion.li>
            <motion.li
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg
                className="w-6 h-6 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Fast, reliable shipping</span>
            </motion.li>
            <motion.li
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg
                className="w-6 h-6 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Secure and easy online shopping experience</span>
            </motion.li>
            <motion.li
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg
                className="w-6 h-6 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Exceptional customer service</span>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
