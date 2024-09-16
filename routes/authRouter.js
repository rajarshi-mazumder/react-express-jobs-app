import { Router } from "express";
import { getAllUsers, login, register } from "../controllers/authController.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login",validateLoginInput, login);
router.get("/users", getAllUsers);

export default router;
