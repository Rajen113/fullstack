import React from "react";
import {  Link } from "react-router-dom";

function Layout({children}) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-teal-600 text-white shadow-lg">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white">
            <span className="text-teal-300">Shop</span>App
          </Link>
          <div className="space-x-6 text-lg">
            <Link to="/" className="hover:text-teal-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-teal-200 transition-colors">About</Link>
            <Link to="/login" className="hover:text-teal-200 transition-colors">Login</Link>
            <Link to="/signup" className="hover:text-teal-200 transition-colors">Sign Up</Link>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 bg-white py-8">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="bg-teal-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ShopApp. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <Link to="/terms" className="hover:text-teal-200">Terms</Link>
            <Link to="/privacy" className="hover:text-teal-200">Privacy</Link>
            <Link to="/contact" className="hover:text-teal-200">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
