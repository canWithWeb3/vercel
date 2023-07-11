// express
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }))

const userRoutes = require("./routes/user")

app.use("/", (req, res) => {
    res.send("anan")
})

app.listen(3000, function() {
    console.log("listening on port 3000");
});