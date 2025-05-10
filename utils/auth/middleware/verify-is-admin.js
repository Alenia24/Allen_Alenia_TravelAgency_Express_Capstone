// Define middleware to verify that the logged in user is an admin
function verifyIsAdmin(req, res, next) {
  // Check if the logged in user is an admin or no user logged in
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Restricted Access. " });
  }
  // Continue to the next process
  next();
}

export default verifyIsAdmin;