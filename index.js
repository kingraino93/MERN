const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const indexController = require('./controllers/index_controller')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/', indexController);

//db connection
mongoose
  .connect(process.env.MONGO_URI, {

    //got an error with this guy 

    //userNewUrlParser: true, 

    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!!"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
