import bcrypt from "bcrypt";

// Import the user model and utils
import User from "../../models/users/users-model.js";
import generateAccessToken from "../../utils/auth/generate-access-token-util.js";
import generateRefreshToken from "../../utils/auth/generate-refresh-token-util.js";

// Create a user
async function createUser(req, res) {
  try {
    // Check to see if the username is taken since we set username to be unique
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(400).json({ message: "Username taken." });
    }

    // Hash the password 10 times before saving the user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create the user
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role,
    });

    res.status(201).json("Registered Successfully.");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Array to store all refresh tokens for login
let refreshTokens = [];

// Login a user
async function loginUser(req, res) {
  try {
    // Authenticate the user
    // Check if the user exists
    const user = await User.findOne({ username: req.body.username });

    // If the user is not found return a message
    if (!user) {
      return res.status(400).json({ message: "User Not Found." });
    }

    // If the user is found
    // Check if the password used for logging in, is the same as the password that the user used to sign up
    const isPassword = await bcrypt.compare( req.body.password, user.password )

    // If the password id not the same return a message
    if(!isPassword) {
        return res.status(400).json({ message: "Invalid Password."})
    }

    // If the password is correct
    // Generate the tokens
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    // Store the refresh token 
    refreshTokens.push(refreshToken)

    // Send the accessToken and refreshToken to the user
    return res.json({ message: "Logged in successfully.", accessToken: accessToken, refreshToken })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { createUser };
