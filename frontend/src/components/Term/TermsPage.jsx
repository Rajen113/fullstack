import React from "react";

function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">
          Terms and Conditions
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to ShopApp. By accessing or using our website, you agree to comply with and be bound
            by the following terms and conditions. If you do not agree with these terms, you should not
            use our website or services.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Use of the Website</h3>
              <p className="text-lg text-gray-600 mb-6">
                You agree to use this website in accordance with applicable local, state, national, and international laws. 
                You are responsible for ensuring that all users accessing the site through your internet connection comply with these terms.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Responsibility</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you create an account on ShopApp, you are responsible for maintaining the confidentiality of your account
                information, including your password, and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Information</h3>
              <p className="text-lg text-gray-600 mb-6">
                While we strive to ensure that all product descriptions and prices on the website are accurate, we do not guarantee that they are error-free. We reserve the right to correct any errors and to cancel or refuse any orders placed for products with inaccurate information.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pricing and Payment</h3>
              <p className="text-lg text-gray-600 mb-6">
                All prices displayed on our website are in INR (Indian Rupees). Payment for products purchased must be made at the time of purchase. We accept various forms of payment, including credit cards, debit cards, and third-party payment services.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h3>
              <p className="text-lg text-gray-600 mb-6">
                We aim to ship products as quickly as possible, but delivery times may vary based on your location and the availability of the products. ShopApp is not responsible for delays in shipping caused by third-party couriers.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Returns and Refunds</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you are not satisfied with your purchase, you may be eligible for a return or refund depending on the product type and the circumstances. Please review our full return policy on our website for further details.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h3>
              <p className="text-lg text-gray-600 mb-6">
                In no event shall ShopApp or its affiliates be liable for any damages (including, but not limited to, indirect, incidental, special, or consequential damages) arising from your use of the website or the products purchased.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms and Conditions</h3>
              <p className="text-lg text-gray-600 mb-6">
                We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page with the updated date. It is your responsibility to review this page periodically.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h3>
              <p className="text-lg text-gray-600 mb-6">
                These Terms and Conditions are governed by the laws of India, and any disputes related to these terms will be resolved in the courts located in [City, India].
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
              </p>
              <p className="text-teal-600 text-lg font-semibold">support@shopapp.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
