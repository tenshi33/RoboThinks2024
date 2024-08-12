import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'
import 'dotenv/config';



require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;

const transcribeAudio = async (sttFileAudio) => {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(sttFileAudio)); // Correct file path
        formData.append('model', 'whisper-1'); // The model

        const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                ...formData.getHeaders(),
            },
        });

        console.log('Transcription:', response.data.text);
    } catch (error) {
        console.error('Error transcribing audio:', error.response ? error.response.data : error.message); 
    }
};

module.exports = (transcribeAudio) //export and takes one argument (audio file path)