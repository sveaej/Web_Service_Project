const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("../models/user");
const Password = require("../models/password");
//const util = require("util"); //for debugging

//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
exports.loginUser = async (req, res) => {
    //validate the password first
    try {
        const login = await Password.findOne({username: req.body.username});
        if (req.body.password == login.password) {
            //Find the user by username
            const user = await User.findOne({username: req.body.username});
            //return that user
            return res.json(user.toJSON());
        }
        else {
            return res.status(401).json({error: "Password is incorrect."});
        }
    }
    catch (error) {
        return res.status(400).json({error: "Bad request."});
    }
}

//AUTHENTICATE - GET
exports.verifyLogin = async (req, res) => {
    //Check that token exists
    if (req.params.token == null) {
        return res.status(400).json({error: "Token does not exist!"});
    }
    //Find the user by token
    try {
        const user = await User.findOne({api_token: req.params.token}).lean();
        if (user == null) {
            return res.status(400).json({error: "User with that token does not exist."});
        }
        //return that user
        return res.json(user);
    }
    catch(error) {
        return res.status(400).json({error: "Bad request."});
    }
    
}