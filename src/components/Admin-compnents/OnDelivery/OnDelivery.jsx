import React from "react";
import OrderCard from "../OrderCard/OrderCard";
import { useSelector } from "react-redux";

function OnDelivery() {
  const onDeliveryStatus = useSelector((state) => state.orderSlice.orders);
  let ordersAmount = 0;

  onDeliveryStatus.forEach((order) => {
    if (order.orderStatus === "delivery") {
      ordersAmount += 1;
    }
  });
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          On Delivery Orders [ {ordersAmount} ]
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onDeliveryStatus.map((order) =>
            order.orderStatus === "delivery" ? (
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

export default OnDelivery;
