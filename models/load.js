/*
This file pulls load data from MongoDB and sends it to the API
*/

//Import mongoose
const mongoose = require("mongoose");

const loadSchema = new mongoose.Schema({
    //This schema is based on the Eleos API documentation
    id: {
        type: String,
        required: true,
    },
    actions: {
        type: [{}],
        default: []
    },
    form_codes: [String],
    display_identifier: {
        type: String,
        required: true
    },
    display_identifier_title: {
        type: String,
        default: 'Order',
        required: true //change this later. It's non-empty but not required??
    },
    sort: {
        type: Number,
        required: true
    },
    order_number: {
        type: String,
        required: true
    },
    dispatch: String,
    load_status: {
        type: String,
        required: true,
    },
    load_status_label: {
        type: String,
        required: true,
    },
    load_status_title: String,
    active: {
        type: Boolean,
        required: true,
    },
    current: {
        type: Boolean,
        required: true,
    },
    hazmat: Boolean,
    check_date: String, //in the thing it says string<date-time>, not sure what that means
    customer_name: String,
    special_notes: String,
    pickup_title: {
        type: String,
        default: "Pickup",
    },
    stop_list_label: {
        type: String,
        default: "Stops",
    },
    shipper: {},
    stops: [{}], //there's some sorting and stuff, not sure where that's implemented
    consignee: {},
    fields: [{}],
    attachments: [{}],
    custom: {},
    truck: {},
    prevent_navigation: {
        type: Boolean,
        default: false,
    },
    route_options: {},
    hide_total_miles: {
        type: Boolean,
        default: false,
    },
    trip_planner_enabled: Boolean,
    enable_location_updates: {
        type: Boolean,
        default: false,
    },
    stickers: [{}],
    include_in_compliance_report: Boolean,
    workflow_code: {
        type: String,
        default: "DEFAULT",
    },
    poi_search_layers: [String],
    global_poi_search_layers: [String],
    trip_policies: [{}],
    router: {},
    enable_map_interaction_in_navigation: {
        type: Boolean,
        default: false,
    },
    allow_reporting_issue_in_navigation: {
        type: Boolean,
        default: false,
    },
});

//Export the schema
module.exports = mongoose.model('Loads', loadSchema);
