const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("../models/user");
const Password = require("../models/password");
//const util = require("util"); //for debugging

//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
exports.loginUser = async (req, res) => {
    //res.send(`The username is ${req.body.username}`)
    //Create a new token
    var token = "123abc"
    //validate the password first
    console.log(`The password is ${req.body.password}\n`);
    const login = await Password.findOne({username: req.body.username});
    if (req.body.password == login.password) {
        //User is authenticated
        //Find the user by username
        const user = await User.findOne({username: req.body.username})
        //Update the token
        user.api_token = token;
        await user.save();
        //return that user
        return res.json(user.toJSON());
    }
    else {
        return res.status(401).json({error: "Password is incorrect."});
    }
}

//AUTHENTICATE - GET
exports.verifyLogin = async (req, res) => {
    //Find the user by token
    const user = await User.findOne({api_token: req.params.token}).lean()
    //return that user
    res.json(user)
    //update this so that it can catch an error if user with that token does not exist
}