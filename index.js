const express = require('express');
const User = require('./models/chathistory.user')
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
});

//send data to the database
app.post('/api/chathistory/user', async (req,res)=>{
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//get add the chathistory data
app.get('/api/chathistory/user', async (req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//setup the database and port
mongoose.connect("mongodb+srv://Noir:uDuEfWwZGT8oEIyp@backenddb.izjaw.mongodb.net/datas?retryWrites=true&w=majority&appName=backendDB")
.then(()=>{
    console.log("Database is connected");
    app.listen(3000, ()=>{
        console.log("listening to port 3000");
    })
})



