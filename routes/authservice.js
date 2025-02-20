const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("../models/user");
//const util = require("util"); //for debugging

//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
exports.loginUser = async (req, res) => {
    //res.send(`The username is ${req.body.username}`)
    //Create a new token
    var token = "123abc"
    //Find the user by username
    const user = await User.findOne({username: req.body.username})
    //Update the token
    user.api_token = token;
    await user.save();
    //return that user
    res.json(user.toJSON())
}

//AUTHENTICATE - GET
exports.verifyLogin = async (req, res) => {
    //Find the user by token
    const user = await User.findOne({api_token: req.params.token}).lean()
    //return that user
    res.json(user)
    //update this so that it can catch an error if user with that token does not exist
}