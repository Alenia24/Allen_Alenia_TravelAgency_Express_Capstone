import express from "express";
const router = express.Router();

// Import the auth controller
import * as AuthController from "../../controllers/auth/auth-controller.js";

// Create a user
router.post("/register", AuthController.createUser);

// Login a user
router.post("/login", AuthController.loginUser)

// Logout a user
router.delete("/logout", AuthController.logoutUser)

export default router;
