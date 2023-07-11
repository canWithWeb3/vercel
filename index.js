// express
const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("index3")
})

app.listen(3000, function() {
    console.log("listening on port 3000");
});