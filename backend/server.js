const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
});
app.get("/people", (req, res) => {
    res.send("Welcome people");
});

app.listen(8000, () => {
    console.log("Server is listening....");
});