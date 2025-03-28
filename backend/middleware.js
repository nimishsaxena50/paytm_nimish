const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./config');

const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.user_id) {
            req.user = decoded;
            next();
        } else {
            return res.status(403).json({ message: 'Invalid token' });
        }
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authentication;
