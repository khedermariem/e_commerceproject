const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
    name: {
      type: String,
      maxlength: 265
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address"
    },
    quantity: {
      type: Number,
      default: 0
    },
    taxPrice: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    isPaid: {
      type: Boolean,
      default: false
    },
    paidAt: {
      type: Date
    },
    isDelivered: {
      type: Boolean,
      default: false
    },
    deliveredAt: {
      type: Date
    }
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);