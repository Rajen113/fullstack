import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    axios.post("http://localhost:3000/user", data)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
        setData({
          name: "",
          username: "",
          email: "",
          password: "",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 animate-fadeIn">
      <div className="w-full max-w-md p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 animate-fadeInUp">
            Create a New Account
          </h2>
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-md text-white font-semibold transition-all duration-300 ease-in-out ${
                isSubmitting
                  ? "bg-teal-300 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600 transform hover:scale-105"
              }`}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-teal-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
