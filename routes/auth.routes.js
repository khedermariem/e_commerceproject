const router = require("express").Router();
const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");
 const userControllers = require("../controllers/user.controllers")
router.get( verifyToken, async (req, res) => {
	try {
		const user = await User.findById(req.verifiedUser._id);
		return res.status(200).json({ user: user });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
});
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(403).json("Email/Password is wrong");
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res.status(403).json("Email/Password is wrong");
		}
		const token = jwt.sign(
			{ _id: user._id, isSeller: user.isSeller },
			process.env.TOKEN_KEY,
			{
				expiresIn: "2 days",
			}
		);
		return res.status(200).json({ token: token, user: user });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
});
router.post("/register", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (user) return res.status(422).json("Email already exist");
	
		const salt = await bcrypt.genSalt(16);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: hashedPassword,
		});
		const savedUser = await newUser.save();
		return res.status(200).json({ user: savedUser });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
});
router.get("/", userControllers.getAllUsers);
router.get("/", userControllers.getUserById);



module.exports = router;