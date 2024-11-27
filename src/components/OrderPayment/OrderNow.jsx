import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToOrder } from "../../store/orderSlice";
import { ShoppingBag, ReceiptText, CheckCircle } from "lucide-react";

import { onClearCart } from "../../store/addToCartSlice";

function OrderNow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderStatus, setOrderStatus] = useState("on list");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isOrder, setIsOrder] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const total_cart = useSelector((state) => state.cartReducer.cart);
  const totalPrice = total_cart.reduce((total, item) => total + item.price, 0);

  const isDone = (e) => {
    e.preventDefault();

    if (!userName || !userPhone || !address) {
      return alert("Please enter all details");
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let generatedOrderNumber = "";
    for (let i = 0; i < 8; i++) {
      generatedOrderNumber += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }
    setOrderNumber(generatedOrderNumber);

    const userOrder = {
      orderNumber: generatedOrderNumber,
      userName,
      userPhone,
      address,
      total_cart,
      orderStatus,
      totalPrice,
    };

    dispatch(setToOrder(userOrder));

    setIsOrder(true);

    dispatch(onClearCart());
  };

  return (
    <>
      {!isOrder ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
          <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg bg-gray-900 rounded-lg p-6">
            {/* User Information Form */}
            <div className="w-full md:w-1/2 p-4 border-r border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-yellow-500">
                Order Now
              </h2>
              <form onSubmit={isDone} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="userPhone"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address</label>
                  <textarea
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
      ) : (
        <>
          <div className="p-6 max-w-2xl min-h-screen mx-auto space-y-6 bg-gray-50">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <CheckCircle className="text-green-500 w-8 h-8" />
                Thank You for Ordering!
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Delivery Animation Section */}
              <div className="p-4 flex justify-center items-center bg-gray-100">
                <div className="w-full max-w-md">
                  <img
                    src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/media/139eef797b4034c31cd8189a717c2022.gif"
                    alt="Delivery Animation"
                    className="rounded-lg object-cover w-full h-72 shadow-md"
                  />
                </div>
              </div>

              {/* Order Confirmation Message */}
              <div className="p-4 text-center bg-green-50">
                <p className="text-lg font-semibold text-green-800 flex items-center justify-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                  Your Order is on the Way!
                </p>
              </div>
            </div>

            {/* Order Details Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="text-gray-600">
                  You can check your order status by searching your order
                  number/ID.
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <ReceiptText className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">
                    Order #: {orderNumber || "N/A"}
                  </span>
                </div>
              </div>

              {/* Additional Order Info (Optional) */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">
                    Estimated Delivery
                  </p>
                  <p>25-30 Mints</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Shipping Method</p>
                  <p>Standard Shipping</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="p-6 max-w-2xl min-h-screen mx-auto space-y-6">
            
            <h2>Thank You for Ordring!</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex justify-center items-center bg-gray-50">
                <img
                  src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/media/139eef797b4034c31cd8189a717c2022.gif"
                  alt="Delivery Animation"
                  className="rounded-lg object-cover w-full h-70"
                />
              </div>
              <div className="p-4 text-center text-lg font-semibold text-gray-800">
                Your Order is on the list! 🚲
              </div>
            </div>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <p>
                Your Order is on the list you ckeck your order status by
                searching your order number\id
              </p>
              <h2 className="text-xl font-semibold text-gray-20000 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Order Details
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <ReceiptText className="h-4 w-4" />
                <span>Order #: {orderNumber}</span>
              </div>
            </div>
          </div> */}
        </>
      )}
    </>
  );
}

export default OrderNow;
