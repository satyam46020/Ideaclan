const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User.model');

registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      email,
      password,
      role,
    });

    user.password = await bcrypt.hash(password, 5);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(payload,'idea',{ expiresIn: 3600 },(err, token) => {
        if (err) 
          throw err;
        res.json({ token });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(payload,'idea',{ expiresIn: 3600 },(err, token) => {
        if (err) 
          throw err;
        res.json({ token ,role:user.role});
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { registerUser, loginUser }