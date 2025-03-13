//const key = process.env.platformKey;
const Load = require("../models/load");
const Assign = require("../models/assign");
const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/eleoswsp");
/*
mongoose.connect(process.env.SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/
//var connection = mongoose.connection;

//LOADS - GET
exports.getLoads = async (req, res) => {
    //access the token from the request
    const token = req.headers["authorization"];
    //find all of the bridge entity items with that request
    try {
        const assigns = await Assign.find({ user_token: token }).lean();
        if (assigns == null) {
            return res.status(400).json({ error: "User has no loads." });
        }
        //Create an array of load_ids for querying
        let idArr = [];
        for (let i = 0; i < assigns.length; i++) {
            idArr[i] = assigns[i].load_id;
        }
        //Get the loads referenced by the bridge entity
        const loads = await Load.where("id").in(idArr).lean();
        if (loads == null) {
            return res.status(400).json({ error: "Broken bridge." });
        }
        //Send the loads that I found
        res.send(loads);
    } catch (error) {
        return res.status(400).json({ error: "Bad request." });
    }
};
