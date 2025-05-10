import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

// Define middleware to ensure users have a valid token
function authenticateToken(req, res, next) {
  // Get the token from the header
  const authHeader = req.headers["authorization"];
  // Split the token at the space and get the second part with is the token
  const token = authHeader && authHeader.split(" ")[1];

  // Check if a token is provided
  if (token == null) {
    return res.status(401).json("Access Token Missing.");
  }

  // Check if the token is valid
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // If the token is not valid it will return an err
    if (err) {
      return res.status(403).json("Invalid Token.");
    }

    // If the token is valid
    // Pass the user info so the next can use it
    req.user = user;
    // Continue to the next process
    next();
  });
}

export default authenticateToken;
