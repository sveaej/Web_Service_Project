const mongoose = require("mongoose")


const assignSchema = new mongoose.Schema({
    load_id: {
        type: String,
        required: true,
    },
    user_token: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Assign', assignSchema);