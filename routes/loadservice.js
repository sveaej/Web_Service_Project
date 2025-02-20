const key = require("../platformkey");
const Load = require("../models/load");
const LoadAssign = require("../models/loadAssign")
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eleoswsp");

//LOADS - GET
exports.getLoads = async (req, res) => {
    //access the token from the request 
    const token = req.headers["authorization"];
    //console.log(token);
    //res.send("Cool stuff");
    //find all of the bridge entity items with that request
    const loadIds = await LoadAssign.find().lean()
    console.log(loadIds)

    //list the loads that I found
    res.send("Still cool");

}
