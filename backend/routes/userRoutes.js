import express from 'express';
import { deleteProfile, login, profile, register, updateProfile } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuthenticated, profile)
router.put("/update", isAuthenticated, updateProfile);
router.delete("/delete", isAuthenticated, deleteProfile);

export default router;