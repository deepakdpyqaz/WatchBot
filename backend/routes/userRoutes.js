const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require("../controllers/userController");
const {
  isAuthenticatedUser,
} = require("../middleware/authentication");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:Token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

module.exports = router;
