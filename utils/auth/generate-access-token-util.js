import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      username: user.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1hr" }
  );
}

export default generateAccessToken;
