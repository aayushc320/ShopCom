import express from "express";
import {
    categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  updateCategoryController
);

router.get(
    "/get-category",
    categoryController
)

router.get(
    "/single-category/:slug",
    singleCategoryController
)

router.delete(
    '/delete-category/:id',
    deleteCategoryController
)

export default router;
