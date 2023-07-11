// express
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }))

app.use("/", (req, res) => {
    res.render("index")
})

app.listen(3000, function() {
    console.log("listening on port 3000");
});