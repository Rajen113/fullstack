import React from "react";

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-6">
            Welcome to ShopApp. This privacy policy explains how we collect, use,
            and protect your personal information when you visit or make a purchase from
            our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect the following types of information from you:
          </p>
          <ul className="list-disc pl-8 text-gray-600 mb-6">
            <li>Personal details (name, email, etc.) for registration and purchases.</li>
            <li>Payment information for completing orders.</li>
            <li>Browsing data to improve your shopping experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use your information to:
          </p>
          <ul className="list-disc pl-8 text-gray-600 mb-6">
            <li>Process your orders and provide customer support.</li>
            <li>Improve the functionality of the website and personalize your experience.</li>
            <li>Send promotional emails (with your consent).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Protect Your Information</h2>
          <p className="text-gray-600 mb-6">
            We implement a variety of security measures to ensure the safety of your personal
            information. These measures include encryption, secure servers, and limited access
            to authorized personnel only.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell or trade your personal information. However, we may share your information
            with trusted third parties who assist in operating our website, conducting business, or
            servicing you, as long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-6">
            Our website uses cookies to enhance your user experience. Cookies are small files that are
            stored on your device. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 text-gray-600 mb-6">
            <li>Request access to your personal information.</li>
            <li>Request corrections or deletions of your personal data.</li>
            <li>Opt-out of receiving promotional emails.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this privacy policy from time to time. Any changes will be posted on this
            page with the date of the latest revision.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or concerns about this privacy policy, please contact us at:
          </p>
          <p className="text-teal-600">support@shopapp.com</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
