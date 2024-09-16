import { Router } from "express";
import { getAllUsers, login, register } from "../controllers/authController.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", login);
router.get("/users", getAllUsers);

export default router;
