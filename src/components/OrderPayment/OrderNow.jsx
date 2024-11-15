import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderNow() {
  const total_cart = useSelector((state) => state.cartReducer.cart);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    userPhone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const totalPrice = total_cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg bg-gray-900 rounded-lg p-6">
        {/* User Information Form */}
        <div className="w-full md:w-1/2 p-4 border-r border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">
            Order Now
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter delivery address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-2 mt-4 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">
            Order Details
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Number of Items:</span>
              <span>{total_cart.length}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-medium">Items:</span>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                {total_cart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between text-lg font-semibold text-green-400 mt-4">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full p-2 mt-4 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
          >
            Add More Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
