"use strict"
const express = require("express"),
      router = require("./routes/routes.js"),
      host ="127.0.0.1";
      
const port = process.env.PORT || 3000;

const app = express();





app.use("/public", express.static("public"));

app.set("views", "./templates");
app.set("view engine", "ejs");

app.use("/", router);


let serverCallback = () => {
    console.log(
        `Server Running On Host: ${ host }:${ port }`
    );
};


app.listen(port, serverCallback);
