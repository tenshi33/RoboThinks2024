const express = require('express');
const Query = require('./models/chathistory.ai');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const chatcompletion = require('./backend/chatcompletion');




const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
});



app.post('/api/chathistory/query', async (req,res)=>{
    console.log(req.body);
    const {question, answer} = req.body;
    try{
        const user = await Query.create({question:question, answer:answer})
        console.log(user);
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//get add the chathistory data
app.get('/api/chathistory/query', async (req,res)=>{
    try {
        const queries = await Query.find({})
        res.status(200).json(queries);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


app.post('/api/chatcompletion', async (req,res)=>{
    const mess = req.body.message;
    try {
        console.log(mess);
        const result = await chatcompletion(JSON.stringify(mess));
        res.status(200).json(result);
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



