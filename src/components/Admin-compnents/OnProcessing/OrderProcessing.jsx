import React from "react";
import OrderCard from "../OrderCard/OrderCard";
import { useSelector } from "react-redux";

function OrderProcessing() {
  const processingOrders = useSelector((state) => state.orderSlice.orders);
  console.log(processingOrders);
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processingOrders.map((order) =>
            order.orderStatus === "processing" ? (
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

export default OrderProcessing;