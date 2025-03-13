const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/eleoswsp");

const passwordSchema = new mongoose.Schema({
    username: { //must be unique - I could add validation for this later if I have time
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Passwords', passwordSchema);