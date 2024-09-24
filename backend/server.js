const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.get("/people", (req, res) => {
    res.send("Welcome people");
});

app.listen(8000, () => {
    console.log("Server is listening....");
});