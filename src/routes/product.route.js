//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", authMiddleware, productController.deleteProduct);
router.post("/create", authMiddleware, productController.createProduct);

export default router;
