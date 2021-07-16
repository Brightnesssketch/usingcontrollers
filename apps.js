
const express = require("express");
const fs = require("fs");
const app = express();
const routers = require("./routes/routers");

  
app.use(express.json());


app.use(routers);

app.listen(5050, () => {
    console.log("yoo! Dude is up and running");
});