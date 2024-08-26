import express from 'express';
import getHistory from '../utils/getHistory.js';
import addData from '../utils/addData.js';
import chatcompletion from '../utils/chatcompletion.js';
import ConvertTextToSpeech from '../utils/TTSopenai.js'; 
const app = express.Router();


app.get('/chathistory/query', async (req, res) => {
    try {
        const history = await getHistory(); 
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/chatcompletion', async (req, res) => {
    const question = req.body.message;
    try {
        console.log("Message received: " + question);
        const answer = await chatcompletion(question); 
        console.log(typeof answer);
        const addDataResult = await addData({ question, answer }); 
        console.log(addDataResult);
        const resultC = await ConvertTextToSpeech(answer); 

        res.status(200).send(resultC);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default app;
