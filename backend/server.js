const express = require("express");
const cors = require("cors");
const app = express();

const options = {
    origin: "http://localhost:8000",
    useSuccessStatus: 200
}


app.use(cors(options));

app.get("/", (req, res) => {
    res.send("Welcome");
});
app.get("/people", (req, res) => {
    res.send("Welcome people");
});

app.listen(8000, () => {
    console.log("Server is listening....");
});