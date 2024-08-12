import fs from "fs";
import path from "path";
import OpenAI from "openai";
import 'dotenv/config';
import transcribeAudio from './STTopenai.js'


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const speechFile = path.resolve('./client/src/convertedSpeech.wav');

export default async function ConvertTextToSpeech(message) {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "echo",
    input: message,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
};



