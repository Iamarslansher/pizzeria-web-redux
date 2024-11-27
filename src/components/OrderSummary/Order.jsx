import React from "react";
import {
  User,
  Phone,
  MapPin,
  CreditCard,
  Package,
  CheckCircle,
} from "lucide-react";

const OrderSummaryCard = ({
  username = "John Doe",
  phoneNumber = "+1 (555) 123-4567",
  address = "123 Main St, Cityville, State 12345",
  totalAmount = 129.99,
  items = [
    { name: "Wireless Headphones", quantity: 1, price: 79.99 },
    { name: "Phone Case", quantity: 2, price: 25.0 },
  ],
  status = "Processing",
}) => {
  // Status color mapping
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "text-yellow-600 bg-yellow-50";
      case "shipped":
        return "text-blue-600 bg-blue-50";
      case "delivered":
        return "text-green-600 bg-green-50";
      case "cancelled":
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
          status
        )}`}
      >
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6" />
          <h2 className="text-xl font-bold">Order Summary</h2>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">{status}</span>
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
              <p className="font-semibold">{username}</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Phone Number</p>
              <p className="font-semibold">{phoneNumber}</p>
            </div>
          </div>

          {/* Address */}
          <div className="col-span-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Shipping Address</p>
              <p className="font-semibold">{address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="p-4 border-b">
        <h3 className="font-bold mb-3 text-gray-700">Order Items</h3>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between mb-2 last:mb-0">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold">
              ${(item.quantity * item.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Total Amount */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-gray-500" />
          <p className="font-semibold">Total Amount</p>
        </div>
        <p className="text-xl font-bold text-green-600">
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
