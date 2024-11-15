import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMassage, setLoginMassage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/user/login", { email: email, password: password })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong:", error);
      })
    // setIsSubmitting(true);
    // // Simulate async login (e.g., API call)
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   console.log("Logged in with:", email, password);
    // }, 2000);
  };

  useEffect(() => {
    const handleApi = async () => {
      await axios.get("http://localhost:3000/user/login")
        .then((response) => response.data)
        .then((data) => setLoginMassage(data))
        .catch((error) => console.log("something is wrong", error))
    }

    handleApi()

  },)

  console.log(loginMassage)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 animate-fadeIn">
      <div className="w-full max-w-md p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 animate-fadeInUp">
            Login to Your Account
          </h2>
          <form onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-md text-white font-semibold transition-all duration-300 ease-in-out ${isSubmitting
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600 transform hover:scale-105"
                }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:text-blue-800 transition-colors text-blue-900">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
