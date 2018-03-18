//npm run dev to run the app
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

//hago la conexión a la DB
mongoose.connect(keys.mongoURI)

const app = express();

require("./routes/authRoutes")(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT);
