//npm run dev to run the app
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");


//hago la conexión a la DB
mongoose.connect(keys.mongoURI)

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 días en milisegundos
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session())

require("./routes/authRoutes")(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);
