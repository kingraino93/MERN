const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/", home);

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!!"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
