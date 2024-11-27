import React from "react";
import OrderCard from "../OrderCard/OrderCard";
import { useSelector } from "react-redux";

function Completed() {
  const onCompleted = useSelector((state) => state.orderSlice.orders);
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onCompleted.map((order) =>
            order.orderStatus === "completed" ? (
              <OrderCard key={order.id} order={order} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Completed;
