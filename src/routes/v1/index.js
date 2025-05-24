const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const router = express.Router();
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");

router.use("/users", userRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/cart", cartRoute);

module.exports = router;
