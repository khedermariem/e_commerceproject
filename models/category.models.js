const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, maxlength: 256 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", CategorySchema);
