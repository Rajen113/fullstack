import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // To read the product info from the location

function BuyPage() {
  const { state } = useLocation(); // Get the state passed via navigation (product data)
  const [product, setProduct] = useState(state?.product || {}); // Fallback to empty object if no product

  useEffect(() => {
    if (!product) {
      alert("Product not found");
    }
  }, [product]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">Buy Product</h1>
      {product ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg mt-4"
          />
          <p className="text-lg text-gray-600 mt-2">Price: ₹{(product.price * 80).toFixed(2)}</p>
          <p className="text-lg text-green-600 mt-2">
            Discounted Price: ₹{applyDiscount(product.price * 80)}
          </p>
          <p className="text-md text-gray-600 mt-2">{product.description}</p>

          {/* Action Button */}
          <button className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg">
            Complete Purchase
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

const applyDiscount = (price) => {
  const discount = Math.random() * (0.2 - 0.1) + 0.1;
  const discountedPrice = price * (1 - discount);
  return discountedPrice.toFixed(2);
};

export default BuyPage;
