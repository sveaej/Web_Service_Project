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
        minLength: 1,
    },
    api_token: {
        type: String,
        required: true,
        minLength: 1,
        //I could add a default where this is automatically generated in here
    },
    web_token: {
        type: String,
        required: true,
        /*
        validate: {
            validator: v => v == null | v.length > 0 === 0,
            message: "String must either be null or non-empty."
        },
        */
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
        enum: ['monthly', 'per-load'],
    },
    menu: {
        type: {},
        //Do I have to do this validation later?
        validate: {
            validator: function(v) {
                if(this.menu_code) {
                    return true;
                }
                return v;
            },
            message: "Menu is required if menu_code is not defined"
        }
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
        //required: v => dashboard_code === 0,
        //Same rules as menu and menu code
    },
    dashboard_code: { 
        type: String,
        //required: v => dashboard === 0,
        //this would probably be an enum for all the division options that my fake company has
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