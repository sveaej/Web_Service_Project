const key = require("../platformkey");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eleoswsp");
//const userOps = require("../operations/userops");
//const jsend = require("../utils/jsend"); //not sure what this is

//AUTHENTICATE - POST
function loginUser() {
    //Update the database
    //Send back the user
}

//AUTHENTICATE - GET
function verifyLogin() {
    //Search for the user by login token
    //Get the user if user exists
}

//POST
/*
app.post('/users', (req, res) => {
    //authenticate
    if (req.header.Eleos-Platform-Key != key) {
        return res.status(401).send(
            jsend(401, {
                message: "Platform key is incorrect.",
            })
        );
    }
    //now do the stuff
});

app.get('/users', (req, res) => {
    //stuff 
});
*/