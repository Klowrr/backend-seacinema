const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decode = jwt.verify(token.split('Bearer ')[1], process.env.JWT_SECRET);
    res.user = decode.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}