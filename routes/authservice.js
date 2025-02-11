const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("../models/user");

//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
exports.loginUser = (req, res) => {
    //res.send(`The username is ${req.body.username}`)
    //Create a new token
    var token = "123abc"
    //Find the user by username
    const user = User.findOne({username: req.body.username})
    //return that user
    var userJSON = user.toJSON() //doesn't work rn - ask ChatGPT how to convert user to JSON
    res.send(userJSON)
};

//AUTHENTICATE - GET
exports.verifyLogin = (req, res) => {
    //res.send(`The login token is ${req.params.token}`)
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