import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../../store/addToCartSlice";
import { ShoppingCart, ArrowRight } from "lucide-react";
const AddtoCart = () => {
  const total_cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 h-auto text-white">
      <div className="container min-h-screen mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/dashboard"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500"
          >
            Back to Gallery
          </Link>
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {total_cart.length ? (
            total_cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-yellow-400 font-medium mb-4">
                    ${item.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeToCart(item.id))}
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-gray-800 rounded-lg shadow-xl">
              <div className="bg-gray-700 p-6 rounded-full mb-6">
                <ShoppingCart size={48} className="text-yellow-400" />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-white">
                Your Cart is Empty
              </h2>

              <p className="text-lg text-gray-300 mb-8 max-w-md text-center">
                Looks like you haven't added any delicious pizzas to your cart
                yet. Let's fix that and get you some amazing food!
              </p>

              <Link
                to="/dashboard"
                className="group flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-500 hover:transform hover:scale-105 hover:shadow-lg"
              >
                Order Now
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Fast Delivery
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Fresh Ingredients
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Best Prices
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-right">
          {total_cart.length ? (
            <Link
              to="/user-order"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-500"
            >
              Order Now
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
