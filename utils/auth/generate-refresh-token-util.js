import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

function generateRefreshToken(user) {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      username: user.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
}

export default generateRefreshToken;
