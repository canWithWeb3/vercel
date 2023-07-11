const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.render("users/user");
})

module.exports = router;