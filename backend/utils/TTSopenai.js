import fs from "fs";
import path from "path";
import OpenAI from "openai";
import 'dotenv/config';
import transcribeAudio from './STTopenai.js'


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export default async function ConvertTextToSpeech(message) {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1-hd",
      voice: "echo",
      input: message,
    });

    const audioBuffer = Buffer.from(await mp3.arrayBuffer());
    const audioBase64 = audioBuffer.toString("base64");

    return {
      messages: [{ text: message }], // Use the input message or another relevant text
      audio: audioBase64,
    };
  } catch (error) {
    console.error('Error converting text to speech:', error);
    throw new Error('Failed to convert text to speech');
  }
}





