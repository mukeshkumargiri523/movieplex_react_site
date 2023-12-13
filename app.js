const express = require("express");
require("dotenv").config();
const paymentRoute = require("./routes/paymentRoutes.js");
const cors = require("cors");
const path = require("path");

const app = express();
//middleware

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

exports.app = app;
