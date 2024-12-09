import express from "express";
import {
  getProducts,
  updateProducts,
  createProducts,
  deleteProducts
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;