const key = require("../platformkey");
const Load = require("../models/load");
const Assign = require("../models/assign")
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eleoswsp");

//LOADS - GET
exports.getLoads = async (req, res) => {
    //access the token from the request 
    const token = req.headers["authorization"];
    //find all of the bridge entity items with that request
    const assigns = await Assign.find({user_token: token}).lean()
    //Create an array of load_ids for querying
    let idArr = [];
    for (let i = 0; i < assigns.length; i++) {
        idArr[i] = assigns[i].load_id;
    }
    //Get the loads referenced by the bridge entity
    const loads = await Load.where("id").in(idArr).lean();
    //Send the loads that I found
    res.send(loads);
}
