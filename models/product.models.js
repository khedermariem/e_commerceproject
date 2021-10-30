const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, maxlength: 265 },
    slug: {
      type: String,
      maxlength: 512,
      unique: true,
      index: true,
      lowercase: true,
    },
    description: { type: String, maxlength: 1024 },
    image: { type: String },
    price: { type: Number, min: 0 },
    Admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sold: { type: Number, default: 0 },

    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    review: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);
ProductSchema.plugin(uniqueValidator, { message: "not unique" });
ProductSchema.pre("validate", function (next) {
  if (!this.slug) {
    this.slugify();
  }
  next();
});
ProductSchema.methods.slugify = function () {
  this.slug =
    slug(this.name) +
    "-" +
    (+(Math.random() * Math.pow(36, 6)) | 0).toString(36);
};
module.exports = mongoose.model("Product", ProductSchema);
