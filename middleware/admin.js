const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'required token' });
  try {
    const decode = jwt.verify(token.split('Bearer ')[1], process.env.JWT_SECRET);
    if ( decode.user.role !== 'admin' ) return res.status(401).json({ message: 'Unauthorized' });
    req.user = decode.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}