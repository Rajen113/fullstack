import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [visibleDetails, setVisibleDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value, categoryFilter);
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
    filterProducts(searchQuery, e.target.value);
  };

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

  const limitProductName = (name) => {
    return name.length > 35 ? name.substring(0, 35) + "..." : name;
  };

  const applyDiscount = (price) => {
    const discount = Math.random() * (0.2 - 0.1) + 0.1;
    return (price * (1 - discount)).toFixed(2);
  };

  const handleBuy = (product) => {
    alert(`You have added "${product.title}" to the cart!`);
  };

  const toggleDetails = (productId) => {
    setVisibleDetails((prevDetails) => ({
      ...prevDetails,
      [productId]: !prevDetails[productId],
    }));
  };

  const handleAddProduct = () => {
    alert("A new product has been added to the catalog!");
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 min-h-screen py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Our Products
        </h1>

        <div className="mb-6 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-lg w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <select
            value={categoryFilter}
            onChange={handleCategoryFilter}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center text-xl text-white">Loading products...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-200">{error}</div>
        ) : (
          <>
            <div className="text-center mb-8">
              <button
                onClick={handleAddProduct}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Add Product
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {limitProductName(product.title)}
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      ₹{(product.price * 80).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{(product.price * 80 * 1.2).toFixed(2)}
                    </p>
                    <p className="text-lg text-green-600 font-semibold mt-1">
                      ₹{applyDiscount(product.price * 80)}
                    </p>
                    <button
                      onClick={() => handleBuy(product)}
                      className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => toggleDetails(product.id)}
                      className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      {visibleDetails[product.id] ? "Hide Details" : "Show Details"}
                    </button>
                    {visibleDetails[product.id] && (
                      <div className="mt-4 text-sm text-gray-600">
                        <p>
                          <strong>Description:</strong> {product.description}
                        </p>
                        <p>
                          <strong>Category:</strong> {product.category}
                        </p>
                        <p>
                          <strong>Rating:</strong> {product.rating.rate} (
                          {product.rating.count} reviews)
                        </p>
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
