const mongoose = require("mongoose")


const loadAssignSchema = new mongoose.Schema({
    load_id: String,
    user_token: String
})

module.exports = mongoose.model('LoadAssign', loadAssignSchema);