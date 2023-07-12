// express
const express = require("express");
const app = express();

app.set("views", "./views")
app.set("view engine", "ejs")

app.use("/", (req, res) => {
    res.render("users/user")
})

app.listen(3000, function() {
    console.log("listening on port 3000");
});