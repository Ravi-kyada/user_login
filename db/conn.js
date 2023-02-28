const mongoose = require("mongoose");

const DB = process.env.DATABASE;

//db connection
mongoose.set("strictQuery", true);
mongoose
  .connect(DB)
  .then(() => {
    console.log("conection ok");
  })
  .catch((err) => {
    console.log(err);
  });
