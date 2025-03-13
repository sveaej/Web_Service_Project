/*
This file creates a simple local web server and receives API calls.
*/

const express = require("express");
const Auth = require("./routes/authservice");
const Loads = require("./routes/loadservice");
//const key = require("./platformkey");
const key = process.env.platformKey;

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

//Middleware to cause each request to authenticate with the key
app.use(function (req, res, next) {
    const auth = req.headers["eleos-platform-key"];
    if (!auth) {
        return res.status(401).json({ error: "No authorization header." });
    } else if (auth != key) {
        console.log(auth);
        console.log(key);
        return res
            .status(401)
            .json({ error: "Authorization header value is incorrect." });
    }
    next();
});

app.get("/authenticate/:token", (req, res) => {
    Auth.verifyLogin(req, res);
});

app.post("/authenticate", (req, res) => {
    Auth.loginUser(req, res);
});

app.get("/loads", (req, res) => {
    Loads.getLoads(req, res);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
