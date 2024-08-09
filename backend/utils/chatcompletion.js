import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function chatcompletion(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": `${message}` },
      { "role": "system", "content": "Summary, Make it at least 1 sentence" }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
