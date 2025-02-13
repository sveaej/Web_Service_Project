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
    const user = await User.findOne({username: req.body.username}).lean()
    //Update the token
    //return that user
    res.json(user)
};

//AUTHENTICATE - GET
exports.verifyLogin = async (req, res) => {
    //Find the user by token
    const user = await User.findOne({api_token: req.params.token}).lean()
    //return that user
    res.json(user)
    //update this so that it can catch an error if user with that token does not exist
}

//Generate a token
    /*
    var token = "abcdefg"; //placeholder
    var response;
    //Find the user
    const user = userModel.find({ username: req.query.username });
    user.api_token = token;
    //Save the user
    
    //Send back the user
    return res.json(user);
    */
/*
async function verifyLogin(req, res) {

    
    res.send(`The login token is ${req.params.token}`)
    //Search for the user by login token
    //const user = await User.findOne({ api_token: })
    /*
    User.find({api_token: req.path.token}, (error, results) => {
        if (error) {
            return res.status(400).json({error});
        }
        //Get the user if user exists
        response = results;
    });
    return res.json(response);
    
}
*/