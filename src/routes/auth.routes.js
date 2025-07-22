//router
import { Router } from "express";
import authController from "../controllers/auth.controlles.js";

const router = Router();

router.post("/", authController.login);


export default router;