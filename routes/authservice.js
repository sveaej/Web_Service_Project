const key = require("../platformkey");
const mongoose = require("mongoose");
const User = require("./models/user");
//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

//AUTHENTICATE - POST
async function loginUser(req, res) {
    //Generate a token
    var token = "abcdefg" //placeholder
    var response;
    //Find the user
    await User.findOneAndUpdate({username: req.query.username}, {api_token: token}, (error, results) => { //could throw errors
        if (error) {
            res.status(400).json({error}); //I want to understand this syntax better
            return false;
        }
        response = results;
    })
    //Save the user
    await User.save();
    //Send back the user
    res.json(response);
}

//AUTHENTICATE - GET
function verifyLogin() {
    //Search for the user by login token
    //Get the user if user exists
}