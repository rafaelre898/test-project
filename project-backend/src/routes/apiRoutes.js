const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const siteController = require("../controllers/siteController"); // Add this line

router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductDetails);
router.post("/products", productController.addProduct);
router.delete("/products/:productId", productController.deleteProduct);
router.get("/sites/:siteId/configuration", siteController.getSiteConfiguration);

module.exports = router;
