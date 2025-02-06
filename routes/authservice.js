const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("../models/user");
//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
exports.loginUser = (req, res) => {
    //Generate a token
    var token = "abcdefg"; //placeholder
    var response;
    //Find the user
    User.findOneAndUpdate({username: req.query.username}, {api_token: token}, (error, results) => { //could throw errors
        if (error) {
            return res.status(400).json({error}); //I want to understand this syntax better
        }
        response = results;
    })
    //Save the user
    User.save();
    //Send back the user
    return res.json(response);
};

//AUTHENTICATE - GET
exports.verifyLogin = (req, res) => {
    //Search for the user by login token
    User.find({api_token: req.path.token}, (error, results) => {
        if (error) {
            return res.status(400).json({error});
        }
        //Get the user if user exists
        response = results;
    });
    return res.json(response);
};