import bcrypt from "bcrypt"

// Import the user model
import User from "../../models/users/users-model.js";

async function createUser(req, res) {
  try {
    // Check to see if the username is taken since we set username to be unique
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(400).json({ message: "Username taken." });
    }

    // Hash the password 10 times before saving the user
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    // Create the user
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role
    })
    
    res.status(201).json("Registered Successfully.")
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { createUser }
