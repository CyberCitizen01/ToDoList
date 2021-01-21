const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(express.static("public"));

let port = 3000;

app.get("/",function(req,res){

    //res.send("<h1><font>Welcome</font></h1>")
    res.sendFile("index.html");
});

app.get("/about",function(req,res){
    //res.send("<h1>Hello this is the about page</h1>")
});

app.listen(port,function(){

    console.log(`Rey Server has started successfully at: http://localhost:${port}`);
});