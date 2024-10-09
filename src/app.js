const express=require('express');

const app=express();

app.use("/hello", (req, res)=>{
    res.send("hello server is running .....changing")
})

app.listen(777);