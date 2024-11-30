import React from "react";
import PIZZAS from "../../constant/pizza";
import PizzaCard from "../PizzaCard/PizzaCard";
import { useSelector } from "react-redux";
import OrderSummaryCard from "../OrderSummary/Order";

const Dashboard = () => {
  const userSearchItem = useSelector((state) => state.pizaSearchReducer.pizas);
  let searchedPizaIs = userSearchItem[userSearchItem.length - 1];
  const searchItem = useSelector((state) => state.orderSlice.userOrder);
  let searchOrder = searchItem[searchItem.length - 1];
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container min-h-screen mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Pizza Gallery</h1>
        {searchItem.length > 0 && <OrderSummaryCard order={searchOrder} />}
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {searchedPizaIs.length === 0
            ? PIZZAS.map((pizza, index) => (
                <PizzaCard key={index} pizza={pizza} />
              ))
            : searchedPizaIs.map((pizza, index) => (
                <PizzaCard key={index} pizza={pizza} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
