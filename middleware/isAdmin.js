module.exports = function (req, res, next) {
	if (!req.verifiedUser.isAdmin) {
		return res.status(403).json({ message: "you are not a admin" });
	}
	next();
};