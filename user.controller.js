const sealerModel = require("./sealer.model");
const userModel = require("./user.model");

exports.signup = async (req, res) => {
  try {
    const { name, email, mobileNo, password } = req.body;
    const newUser = userModel.build({ name, email, mobileNo, password });
    await newUser.save();
    console.log(newUser);
    res.json(newUser);
  } catch (err) {
    res.json({ err: err.message });
    console.log(err);
  }
};

exports.signupSealer = async (req, res) => {
  try {
    const { name, email, mobileNo, password } = req.body;
    const newUser = sealerModel.build({ name, email, mobileNo, password });
    await newUser.save();
    console.log(newUser);
    res.json(newUser);
  } catch (err) {
    res.json({ err: err.message });
    console.log(err);
  }
};

