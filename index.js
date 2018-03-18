//npm run dev to run the app
const express = require("express");
const mongoose = require("mongoose");
const passportConfig = require("./services/passport"); //como no este require no devuelve nada, y no hace falta que lo tengamos como variable, es lo mismo si ponemos solo el require statement, sin asignarlo a la const
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

//hago la conexión a la DB
mongoose.connect(keys.mongoURI)

const app = express();
/*Un refactor que se puede hacer ahí es require("./routes/authRoutes")(app); eliminando la declaración de la constante*/
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
