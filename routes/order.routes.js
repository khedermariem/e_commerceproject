const router = require("express").Router();
const orderControllers = require("../controllers/order.controllers");
const verifyToken = require("../middleware/verifyToken");
//const isAdmin = require("../middleware/isAdmin");


router.get("/", orderControllers.getOrders);
//router.get("/me", verifyToken, isSeller, productControllers.getOwnedProducts);
router.get("/:orderId", orderControllers.getOrder);
router.post(
	"/",
	verifyToken,
	orderControllers.createOrder,
);
router.put(
	"/:orderId",
	verifyToken,
	orderControllers.updateOrder
);
router.delete("/:orderId", verifyToken, orderControllers.deleteOrder);

module.exports = router;