const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find()
    
    res.render("users/index", {
        title: "Bootstrap",
        products: products
    })
});

module.exports = router;