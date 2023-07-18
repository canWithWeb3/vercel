// express
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// node modules
const path = require("path");

// routes
const userRoutes = require("./routes/user");

// template engine
app.set("view engine", "ejs");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

const mongooseConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://canoguzorhan066:nodejs-book-project@cluster0.m0zvq4g.mongodb.net/ecommerce?retryWrites=true&w=majority");
        console.log("mongodb bağlantısı kuruldu.");
    }catch(err) {
        console.log(err);
    }
}

mongooseConnect()

app.use(userRoutes);

app.listen(3000, function() {
    console.log("listening on port 3000");
});