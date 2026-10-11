const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productsRoutes = require("./routes/product");
const errorhandler = require("./middleware/errorhandler");
const authRoutes = require("./routes/auth");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "working"
    });
});


app.use("/auth",authRoutes);

app.use("/product", productsRoutes)


app.use((req, res) => {
    res.status(404).json({
        message: "Page not found :-(("
    })
})

app.use(errorhandler);


app.listen(PORT, () => {
    connectDB();
    console.log("server listening on " + PORT);
})

