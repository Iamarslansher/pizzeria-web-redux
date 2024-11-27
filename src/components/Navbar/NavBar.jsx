import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setToSearchPiza } from "../../store/searchPizaSlice";
import { userSearchOrder } from "../../store/orderSlice";
import PIZZAS from "../../constant/pizza";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchPiza, setSearchPiza] = useState("");
  const [searchOrder, setSearchOrder] = useState("");

  const total_cart = useSelector((state) => state.cartReducer.cart);
  const total_orders = useSelector((state) => state.orderSlice.orders);
  // console.log(total_orders);
  useEffect(() => {
    let pizzaPrice = 0;
    total_cart.forEach((item) => {
      pizzaPrice += item.price;
    });
    setTotalPrice(pizzaPrice);
  }, [total_cart]);

  // Handle pizza search
  const handleSearchPizza = (e) => {
    const searchValue = e.target.value;
    setSearchPiza(searchValue);
    let thisPiza = [];
    if (!searchValue) {
      thisPiza = [];
    } else {
      thisPiza = PIZZAS.filter((piza) => {
        return piza.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    }

    dispatch(setToSearchPiza(thisPiza));
  };

  // Handle order search
  const handleSearchOrder = (e) => {
    const searchValue = e.target.value;
    setSearchOrder(searchValue);

    if (searchValue && Array.isArray(total_orders)) {
      const yourOrder = total_orders.find((order) =>
        order.orderNumber.toString().includes(searchValue)
      );
      console.log(yourOrder);
      return;
      if (yourOrder) {
        dispatch(userSearchOrder(yourOrder));
      }
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
      {/* Brand Name */}
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        PIZZERIA
      </div>

      {/* Input Fields for Search */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Pizza */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search pizza..."
            value={searchPiza}
            onChange={handleSearchPizza}
            className="pl-10 py-2 w-64 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>

        {/* Search Order */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search order..."
            value={searchOrder}
            onChange={handleSearchOrder}
            className="pl-10 py-2 w-64 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Cart and Total Price */}
      <div className="flex items-center gap-4">
        <div className="text-lg">
          Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => navigate("addToCart")}
        >
          <FaShoppingCart size={24} />
          {total_cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {total_cart.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
