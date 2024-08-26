import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import connectDB from './config/DBconfig.js';
import path from 'path';
import chat_routes from './router/openaiRouter.js';
import { fileURLToPath } from 'url';



const app = express();
const PORT = 3000 ;
const HOST = '127.0.0.1';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api',chat_routes);


connectDB()
    .then(() => {
        app.listen(PORT,HOST, () => {
            console.log(`Server running at http://${HOST}:${PORT}/`);
        });
    });

