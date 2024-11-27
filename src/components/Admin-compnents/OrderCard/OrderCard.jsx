import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOnProcessing } from "../../../store/orderSlice";

import {
  Package,
  User,
  MapPin,
  Phone,
  DollarSign,
  MoreVertical,
  CheckCircle,
  Truck,
  Clock,
  List,
} from "lucide-react";

const OrderCard = ({ order }) => {
  const dispatch = useDispatch();

  const [currentStatus, setCurrentStatus] = useState(order.orderStatus);

  const statusOptions = [
    {
      value: "on list",
      label: "On List",
      icon: <List className="w-5 h-5 text-yellow-500" />,
    },
    {
      value: "processing",
      label: "Processing",
      icon: <Clock className="w-5 h-5 text-yellow-500" />,
    },
    {
      value: "delivery",
      label: "On Delivery",
      icon: <Truck className="w-5 h-5 text-blue-500" />,
    },
    {
      value: "completed",
      label: "Completed",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "bg-yellow-50 text-yellow-700";
      case "delivery":
        return "bg-blue-50 text-blue-700";
      case "completed":
        return "bg-green-50 text-green-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const statusUpdate = (e) => {
    let curntStatus = e.target.value;
    setCurrentStatus(curntStatus);

    dispatch(
      setOnProcessing({
        orderId: order.orderNumber,
        newStatus: curntStatus,
      })
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      {/* Order Header */}
      <div
        className={`p-4 flex justify-between items-center ${getStatusColor(
          currentStatus
        )}`}
      >
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6" />
          <span className="font-bold">Order #{order.orderNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          {statusOptions.find((option) => option.value === currentStatus)?.icon}
          <span className="font-semibold capitalize">{currentStatus}</span>
        </div>
      </div>

      {/* Order Details */}
      <div className="p-4 grid md:grid-cols-2 gap-4">
        {/* Customer Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-500" />
            <span className="font-semibold">{order.userName}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-500" />
            <span>{order.userPhone}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="text-sm">{order.address}</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-gray-500" />
              <span>Total Items</span>
            </div>
            <span className="font-semibold">{order.total_cart.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <span>Total Amount</span>
            </div>
            <span className="font-bold text-green-600">
              ${order.totalPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="p-4 border-t">
        <h4 className="font-semibold mb-2">Order Items</h4>
        {order.total_cart.map((item, index) => (
          <div key={index} className="flex justify-between py-1">
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Status Dropdown */}
      <div className="p-4 border-t">
        <div className="relative">
          <select
            value={currentStatus}
            onChange={statusUpdate}
            className="w-full p-2 border rounded-md appearance-none"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <MoreVertical className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
