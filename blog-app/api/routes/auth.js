//auth schema
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); //TO HASH PASSWORD

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //TO HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //USERNAME
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Credentials!!");
    //PASSWORD
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Credentials!!");
    //NOT TO DISPLAY PASSWORD TO USER
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
