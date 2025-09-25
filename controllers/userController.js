const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, message: errors.array()[0].msg });
  }
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({
      message: 'User created successfully.',
      user_id: user._id
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, message: errors.array()[0].msg });
  }
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(401).json({ status: false, message: 'Invalid Username and password' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ status: false, message: 'Invalid Username and password' });
    }
    res.status(200).json({
      message: 'Login successful.',
      jwt_token: 'Optional implementation'
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
