require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
//database connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error ", (err) => {
  console.log("DB connnection failed with -", err);
});
//import routes
const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require("./routes/category.routes");
const orderRoutes = require("./routes/order.routes");
const productRoutes = require("./routes/product.routes");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes middllewares
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

//server listening
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server oumourou mrigla");
});
