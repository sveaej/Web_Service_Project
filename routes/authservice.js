const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("../models/user");
const schema = User.schema;
const userModel = mongoose.model('User', schema);
//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
exports.loginUser = (req, res) => {
    //Generate a token
    var token = "abcdefg"; //placeholder
    var response;
    //Find the user
    const user = userModel.find({ username: req.query.username });
    user.api_token = token;
    //Save the user
    
    //Send back the user
    return res.json(user);
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