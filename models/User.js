const mongoose = require("mongoose");
const { Schema } = mongoose; //same as const Schema = mongoose.Schema; 

const userSchema = new Schema({
    googleId: String
});

mongoose.model("users", userSchema); //this creates a new collection called user, or... matches the one that already exists