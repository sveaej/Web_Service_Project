//This function is for creating database stuff without having to do it on the command line

const mongoose = require("mongoose");
const User = require("./models/user");
const Load = require("./models/load");
const LoadAssign = require("./models/loadAssign")
//const util = require("util"); //for debugging

//Connect to the database
mongoose.connect("mongodb://localhost/eleoswsp");

/*
These are mongodb commands to be copied and pasted into the terminal, they don't actually run in here
db.loads.insertOne({id: "load1", display_identifier: "coolDisplay", sort: 1, order_number: 1, load_status: "Good",
    load_status_label: "Status", active: true, current: true, hazmat: false, customer_name: "Blorbo Bleebus", special_notes: "The Bleebiest!"
})

db.loadAssign.insertOne({load_id: "load1", user_token: "123abc"})
*/
