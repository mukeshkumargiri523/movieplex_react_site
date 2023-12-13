const { app } = require("./app");

app.listen(process.env.PORT, () =>
  console.log(`server started on ${process.env.PORT}`)
);
