const router = require("express").Router();
const categoryControllers = require("../controllers/category.controllers");
const verifyToken = require("../middleware/verifyToken");

const isAdmin = require("../middleware/isAdmin");
router.get("/", categoryControllers.getCategories);
router.post("/",verifyToken,isAdmin, categoryControllers.createCategory);

module.exports = router;