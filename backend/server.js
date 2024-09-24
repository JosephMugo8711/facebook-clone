const express = require("express");
const cors = require("cors");
const app = express();

const allowed =  ["http://localhost:5173", "some other link"];

function options(req, res){
    let tmp;
    let origin = req.header("Origin");
    if(allowed.indexOf(origin) > -1){
        tmp = {
            origin: true,
            optionSuccessStatus: 200,
        };
    } else {
        tmp = {
            origin: "wait"
        };
    }
    res(null, tmp);
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