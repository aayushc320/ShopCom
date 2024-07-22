import  express from "express";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable'

const router = express.Router();

//create product route
router.post('/create-product', requireSignin, isAdmin, formidable(), createProductController)

//create product route
router.put('/update-product/:pid', requireSignin, isAdmin, formidable(), updateProductController)

//get product
router.get('/get-product', getProductController)

//get single product
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search 
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;