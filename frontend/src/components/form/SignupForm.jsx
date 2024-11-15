import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupForm() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // For user feedback
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:3000/user/signup", data);
      console.log("Data submitted successfully:", response.data);
      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Something went wrong:", error);
      setMessage(
        error.response?.data?.message || "An error occurred during signup."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 animate-fadeIn">
      <div className="w-full max-w-md p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 animate-fadeInUp">
            Create a New Account
          </h2>
          <form onSubmit={handleForm}>
            {["name", "username", "email", "password"].map((field) => (
              <div key={field} className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor={field}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  id={field}
                  placeholder={`Enter ${field}`}
                  value={data[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
            ))}
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
          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.includes("successful") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="hover:text-teal-200 transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
