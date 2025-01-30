/*
This is where the operations on the database will be.
For authenticate, this is logging in and authenticating.
*/
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eleoswsp"); //connect to the database

//GET - get a user and see if said user is still logged in
//find the user in the database and return it
//if the tokens match, the user is logged in 
//find user by token


//POST - log a user in
//find the user in the database by username
//update/generate a new API token
//return the user
