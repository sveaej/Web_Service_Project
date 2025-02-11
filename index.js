/*
This file creates a simple local web server.
*/

const express = require("express")
const Auth = require("./routes/authservice")
const Loads = require("./routes/loadservice")

const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

app.get('/authenticate/:token', (req, res) => {
    //res.send("This is the get request for /authenticate!")
    Auth.verifyLogin(req, res)
    //req.params.token
})

app.post('/authenticate', (req, res) => {
    //res.send("This is the post request for /authenticate!");
    Auth.loginUser(req, res)
})

app.get('/loads', (req, res) => {
    //stuff goes here
    res.send("This is the get request for /loads!")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})

/*
const http = require("http")

//const mongoose = require("mongoose");
//const express = require("express");

//const User = require("./models/user");
//const Load = require("./models/load");

//Connect to the local mongoose database
//mongoose.connect("mongodb://localhost/eleoswsp");

//Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write("Server response")
    res.end();
})

server.listen((3000), () => {
    console.log(`Server is running!`);
})
*/

/*
Okay, here are my questions

*/

//This is where I will put the endpoint stuff. I might want to divide my CRUD functions
//into different files as well 

/*
run() 
async function run() {
    
    
    const user = User.create({ 
        full_name: "Test3", 
        api_token: "invalidtoken3", 
        web_token: "idek3", 
        billing_code: "lol1234_oo3", 
        billing_description: "This is a billing description for user Test3",
        billing_type: "per-load",
        dashboard_code: "DEFAULT_DASHBOARD",
        username: "T3",
    })
    
    await (await user).save()
    
    console.log(user);
}
    */