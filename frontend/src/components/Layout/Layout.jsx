import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-teal-600 shadow-lg">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            <span className="text-teal-300">Shop</span>App
          </Link>
          <div className="space-x-6 text-lg flex">
            <NavLink to="/" active={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/about" active={isActive("/about")}>
              About
            </NavLink>
            <NavLink to="/login" active={isActive("/login")}>
              Login
            </NavLink>
            <NavLink to="/signup" active={isActive("/signup")}>
              Sign Up
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 bg-white py-8 px-4 sm:px-8 lg:px-16">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="bg-teal-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg font-light">
            &copy; {new Date().getFullYear()} ShopApp. All rights reserved.
          </p>
          <div className="space-x-4 mt-2">
            <Link
              to="/terms"
              className="hover:text-teal-300 transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-teal-300 transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link
              to="/contact"
              className="hover:text-teal-300 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md transition-all duration-300 ${
        active
          ? "bg-teal-700 text-white"
          : "text-white hover:bg-teal-500 hover:text-teal-100"
      }`}
    >
      {children}
    </Link>
  );
}

export default Layout;
