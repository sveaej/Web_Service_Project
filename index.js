/*
This file creates a simple local web server.
*/

const http = require("http")
const mongoose = require("mongoose");

const User = require("./user");
const Load = require("./load");

//Connect to the local mongoose database
mongoose.connect("mongodb://localhost/eleoswsp");


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

//This is where I will put the endpoint stuff. I might want to divide my CRUD functions
//into different files as well 
