import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToCart } from "../../store/addToCartSlice";

const PizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden h-full">
      <div className="relative h-48">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-md">
          ${pizza.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-bold mb-2 text-blue-950">{pizza.name}</h2>
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-end">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          onClick={() => dispatch(setToCart(pizza))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
