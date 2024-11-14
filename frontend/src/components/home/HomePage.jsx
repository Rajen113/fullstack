import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // State to track which product's details are visible
  const [visibleDetails, setVisibleDetails] = useState({});

  // Fetch products from the API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Mock API for product data
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially show all products
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  // Handle search input and filter products
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value, categoryFilter);
  };

  // Handle category filter and search
  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
    filterProducts(searchQuery, e.target.value);
  };

  // Filter products by name and category
  const filterProducts = (searchQuery, categoryFilter) => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Limit product name to 35 characters
  const limitProductName = (name) => {
    return name.length > 35 ? name.substring(0, 35) + "..." : name;
  };

  // Calculate price discount between 10% and 20%
  const applyDiscount = (price) => {
    const discount = Math.random() * (0.2 - 0.1) + 0.1; // Random discount between 10% and 20%
    const discountedPrice = price * (1 - discount);
    return discountedPrice.toFixed(2);
  };

  // Handle Buy Button click
  const handleBuy = (product) => {
    alert(`You have added "${product.title}" to the cart!`);
  };

  // Handle Show Details toggle
  const toggleDetails = (productId) => {
    setVisibleDetails((prevDetails) => ({
      ...prevDetails,
      [productId]: !prevDetails[productId], // Toggle visibility of details for this product
    }));
  };

  // Handle Add Product button click
  const handleAddProduct = () => {
    alert("A new product has been added to the catalog!");
    // You can extend this to actually add a product to the list (useState) or update the backend API
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h1>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-lg w-1/3"
          />

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={handleCategoryFilter}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>

        {/* Display loading state or products */}
        {loading ? (
          <div className="text-center text-xl text-gray-600">Loading products...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-600">{error}</div>
        ) : (
          <>
            {/* Add Product Button */}
            <div className="text-center mb-8">
              <button
                onClick={handleAddProduct}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Product
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {limitProductName(product.title)}
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">₹{(product.price * 80).toFixed(2)}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{(product.price * 80 * 1.2).toFixed(2)} {/* Original Price */}
                    </p>
                    <p className="text-lg text-green-600 font-semibold mt-1">
                      ₹{applyDiscount(product.price * 80)} {/* Discounted Price */}
                    </p>
                    <button
                      onClick={() => handleBuy(product)}
                      className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Buy Now
                    </button>

                    {/* Show Details Button */}
                    <button
                      onClick={() => toggleDetails(product.id)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {visibleDetails[product.id] ? "Hide Details" : "Show Details"}
                    </button>

                    {/* Product Details */}
                    {visibleDetails[product.id] && (
                      <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
