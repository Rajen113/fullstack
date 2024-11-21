import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate an API call to submit the form data
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API delay

      // Update status upon successful form submission
      setSubmissionStatus("Your message has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmissionStatus("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-green-400 py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-8">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                className="block text-lg font-semibold text-gray-700"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-lg font-semibold text-gray-700"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                className="block text-lg font-semibold text-gray-700"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Message"}
              </button>
            </div>
          </form>

          {/* Submission Status */}
          {submissionStatus && (
            <div
              className={`mt-4 text-center text-lg font-semibold ${
                submissionStatus.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submissionStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
