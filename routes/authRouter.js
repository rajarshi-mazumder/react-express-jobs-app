import { Router } from "express";
import {
  getAllUsers,
  login,
  logout,
  register,
} from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/users", getAllUsers);
router.get("/logout", logout);

export default router;
