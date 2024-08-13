import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import chatcompletion from './utils/chatcompletion.js';
import connectDB from './config/DBconfig.js';
import getHistory from './utils/getHistory.js';
import addData from './utils/addData.js';
import path from 'path';
import { fileURLToPath } from 'url';import ConvertTextToSpeech from './utils/TTSopenai.js';
;


const app = express();
const PORT = 3000 ;
const HOST = '0.0.0.0';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});


/*insert data to db
app.post('/api/chathistory/query', async (req, res) => {
    try{
        const { question, answer } = req.body;
        const adddata = await addData({question, answer});
        res.status(200).json(adddata);
    }catch(error){
        res.status(500).json(error)
    }
});

*/


// get all data chathistory 
app.get('/api/chathistory/query', async (req, res) => {
    getHistory();
});


app.post('/api/chatcompletion', async (req, res) => {
    const question = req.body.message;
    try {
        console.log(" Message received :" + question);
        const answer = await chatcompletion(question); // 
        console.log(typeof(result))
        const addDataresult = await addData({question,answer}) // insert data to database 
        console.log(addDataresult)
        const resultC = await ConvertTextToSpeech(answer); 

        console.log(resultC + "hellow")
        res.status(200).send(resultC);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

connectDB()
    .then(() => {
        app.listen(PORT,HOST, () => {
            console.log(`Server running at http://${HOST}:${PORT}/`);
        });
    });

