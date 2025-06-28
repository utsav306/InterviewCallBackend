import express from "express";
import { signup, login, getMe } from "../controllers/authController";
import { validateSignup, validateLogin } from "../validators/authValidator";
import { protect } from "../middlewares/authMiddleware";
import { forgotPassword, resetPassword } from "../controllers/authController";

const router = express.Router();

router.post("/signup", validateSignup, signup);
router.post("/login", validateLogin, login);
router.get("/me", protect, getMe);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
