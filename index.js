const Razorpay = require("razorpay");
const { app } = require("./app");

exports.instance = new Razorpay({
  // key_id: process.env.RAZORPAY_API_KEY,
  // key_secret: process.env.RAZORPAY_SECRET,
  key_id: "rzp_test_BB1Eq2vlfd3ODv",
  key_secret: "OcpnuB6MN1gR7Ov5eeQpAy8X",
});

app.listen(process.env.PORT, () =>
  console.log(`server started on ${process.env.PORT}`)
);
