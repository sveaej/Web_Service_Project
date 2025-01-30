const key = require("../platformkey");
const userOps = require("../operations/userops");
const jsend = require("../utils/jsend"); //not sure what this is

//GET


//POST
app.post('/users', (req, res) => {
    //authenticate
    if (req.header.Eleos-Platform-Key != key) {
        return res.status(401).send(
            jsend(401, {
                message: "Platform key is incorrect.",
            })
        );
    }
    //now do the stuff
});

app.get('/users', (req, res) => {
    //stuff 
});