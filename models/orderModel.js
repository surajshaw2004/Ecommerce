import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Order Placed",
      enum: [
        "Order Placed",
        "Order Confirmed",
        "Shipped",
        "Out For Delivery",
        "Delivered",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
