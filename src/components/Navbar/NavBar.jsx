import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setToSearchPiza } from "../../store/searchPizaSlice";
import PIZZAS from "../../constant/pizza";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total_cart = useSelector((state) => state.cartReducer.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchPiza, setSearchPiza] = useState("");

  useEffect(() => {
    let pizzaPrice = 0;
    total_cart.forEach((item) => {
      pizzaPrice += item.price;
    });
    setTotalPrice(pizzaPrice);
  }, [total_cart]);

  const searchItem = (e) => {
    const searchValue = e.target.value;
    setSearchPiza(searchValue);
    let thisPiza = PIZZAS.filter((piza) => {
      return piza.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    console.log(thisPiza);
    dispatch(setToSearchPiza(thisPiza));
  };

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer">
          PIZZERIA
        </div>

        <form className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for pizzas..."
              value={searchPiza}
              onChange={searchItem}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FaSearch />
            </button>
          </div>
        </form>

        <div className="flex items-center">
          <div className="text-lg mr-4">Total: ${totalPrice.toFixed(2)}</div>
          <div className="relative">
            <FaShoppingCart
              className="text-yellow-500 text-2xl cursor-pointer"
              onClick={() => navigate("addToCart")}
            />
            <div className="absolute -top-5 -right-3 bg-black text-white rounded-full px-2 py-1 text-sm">
              {total_cart.length}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
