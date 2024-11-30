import React from "react";
import {
  User,
  Phone,
  MapPin,
  CreditCard,
  Package,
  CheckCircle,
} from "lucide-react";

const OrderSummaryCard = (props) => {
  const { address, orderStatus, totalPrice, userName, userPhone, total_cart } =
    props.order;

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "text-yellow-600 bg-yellow-50";
      case "on list":
        return "text-blue-600 bg-blue-50";
      case "completed":
        return "text-green-600 bg-green-50";
      case "delivery":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto">
      {/* Header with Status */}
      <div
        className={`p-4 flex justify-between items-center ${getStatusColor(
          orderStatus
        )}`}
      >
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6" />
          <h2 className="text-xl font-bold">Order Summary</h2>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">{orderStatus}</span>
        </div>
      </div>

      {/* Customer Details Section */}
      <div className="p-4 border-b">
        <div className="grid grid-cols-2 gap-4">
          {/* Username */}
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Username</p>
              <p className="font-semibold text-black">{userName}</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Phone Number</p>
              <p className="font-semibold text-black">{userPhone}</p>
            </div>
          </div>

          {/* Address */}
          <div className="col-span-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Shipping Address</p>
              <p className="font-semibold text-black">{address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="p-4 border-b">
        <h3 className="font-bold mb-3 text-gray-700">Order Items</h3>
        {total_cart.map((item, index) => (
          <div key={index} className="flex justify-between mb-2 last:mb-0">
            <div>
              <p className="font-semibold text-black">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Amount */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-gray-500" />
          <p className="font-semibold  text-black">Total Amount</p>
        </div>
        <p className="text-xl font-bold text-green-600">${totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
