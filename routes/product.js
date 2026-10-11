const express = require("express");
const c = require("../controllers/productcontroller");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.get("", c.getProducts);

router.get("/:id", c.getProductById);

router.post("/",protect, c.createProduct);

router.put("/:id",protect, c.updateProduct);

router.delete("/:id",protect, c.deleteProduct);

module.exports = router;