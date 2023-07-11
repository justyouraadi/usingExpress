const express = require("express");
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.end("Hello there how are you this is basic");
})
app.get("/Home",(req,res)=>{
    res.end("Hello there how are you this is home");
})

app.post("/Contact",(req,res)=>{
    res.end("Hello there how are you this is contact")
})

app.listen(port,()=>{
    console.log("created server");
})