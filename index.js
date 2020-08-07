const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connect mongoose"))
  .catch((err) => console.log("Error ", err));
