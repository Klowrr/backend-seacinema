const User = require('../models/userModel.js');
const argon = require('argon2');
const jwt = require('jsonwebtoken');  
module.exports = {
  register: async (req, res) => {
    const { name, age, username, password } = req.body;
    if (!name || !age || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const userAvailable = await User.findOne({ username: username });
    if (userAvailable) {
      return res.status(400).json({ message: 'Username already taken' });
    }
    const hashPassword = await argon.hash(password);
    const user = new User({
      name: name,
      age: age,
      username: username,
      password: hashPassword,
    });
    try {
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    if ( !username || !password ) return res.status(400).json({ message: 'All fields are required' });
    const user = await User.findOne({ username: username });
    const validPassword = await argon.verify(user.password, password);
    if (!user || !validPassword) return res.status(400).json({ message: 'Invalid Username or password' });
    const accessToken = jwt.sign({ 
      user:{
        id: user._id,
        name: user.name,
        age: user.age,
        username: user.username,
        role: user.role
      }
    }, process.env.JWT_SECRET,{expiresIn: '1m'});
    res.status(200).json({ message: 'Login successful', accessToken: accessToken });
  },
  me: async (req, res) => {
    res.send('me');
  }
};