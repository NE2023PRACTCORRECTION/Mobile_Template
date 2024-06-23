const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    console.log("headers ", token);
    if (!token)
      return res
        .status(400)
        .json({ message: "You are not logged in no token" });
    const response = jwt.verify(token, process.env.SECRET, {});
    if (!response)
      return res.status(400).json({ message: "You are not logged in" });
    req.user = { id: response.id };
    next();
  } catch (error) {
    console.log(error.message, "error");
    return res.status(401).json({ message: "Error authenticating" });
  }
};

module.exports = authMiddleware;
