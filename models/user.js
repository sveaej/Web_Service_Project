/*
This file pulls login data from MongoDB and sends it to the API
*/

//Import mongoose
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    //This schema is based on the Eleos API documentation
    full_name: {
        type: String,
        required: true,
        minLength: 1
    },
    api_token: {
        type: String,
        required: true,
        minLength: 1
    },
    web_token: {
        type: String,
        required: true
    },
    billing_code: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_]+$/.test(v);
            },
            message: "String must contain letters, numbers, and underscores only.",
        },
    },
    billing_description: String,
    billing_type: {
        type: String,
        enum: ['monthly', 'per-load']
    },
    menu: {
        type: {}
    },
    menu_code: {
        type: String,
        validate: {
            validator: function(v) {
                if (this.menu) {
                    return true;
                }
                return v.length > 0;
            },
            message: "menu_code is required if menu is not defined."
        }
    },
    dashboard: {
        type: {},
    },
    dashboard_code: { 
        type: String,
        required: true
    },
    custom_settings_form_code: String,
    telematics: {},
    bypass: {}, //deprecated
    bypass_configurations: [{}], //array of objects
    theme: {},
    custom: {},
    username: String,
    division_code: String,
    opencab_configuration: {}
})

//Export the schema
module.exports = mongoose.model('User', userSchema);