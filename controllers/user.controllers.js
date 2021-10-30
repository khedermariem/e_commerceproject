
const User = require("../models/user.models");
const isAdmin = require("../middleware/isAdmin");


const getAllUsers = async (req, res) => {
    try {
      const users = await Todo.find();
      return res.json(users);
    } catch (err) {
      return res.json(err);
    }
  };
  const getUserById = async (req, res) => {
    const id = req.params.userid;
    try {
      const User = await User.findById(id);
      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  };
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;