const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
      const decoded = jwt.verify(token.split('Bearer ')[1], process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
}