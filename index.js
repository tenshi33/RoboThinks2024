const express = require('express');
//const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(express.json());



app.get('/',(req,res)=>{
    res.send("Hello world")
})


mongoose.connect("mongodb+srv://Noir:uDuEfWwZGT8oEIyp@backenddb.izjaw.mongodb.net/datas?retryWrites=true&w=majority&appName=backendDB")
.then(()=>{
    console.log("Database is connected");
    app.listen(3000, ()=>{
        console.log("listening to port 3000");
    })
})



