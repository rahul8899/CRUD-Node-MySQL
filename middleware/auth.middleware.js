const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        res.json({ message: "Token is missing" })
    }
    try {
        const JWT_SECRET = 'rahul'
        const decodedToken = await jwt.verify(token, JWT_SECRET);
        res.locals.decodedToken = decodedToken;
        next();
    } catch (error) {
        console.log("Invalid token", error);
        res.json({ message: 'Token is invalid' })
    }
}

module.exports = authMiddleware;