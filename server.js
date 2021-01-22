const express = require("express")
const bodyParser = require("body-parser")

const app = express();

//app.use(express.static("public"));

let port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));

app.use('/assets', express.static('assets'));

app.get("/",function(req,res){
    res.render("home");
});

app.listen(port,function(){

    console.log(`Rey Server has started successfully at: http://localhost:${port}`);
});