const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: 'sk-proj-fBDWMrxWEYvYcXA1A7mKT3BlbkFJ6ygUZMsX13f1puf4C9sP' });

async function chatcompletion(message) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": `${message}`},
        {"role": "system", "content": "Summary, Make it at least 1 sentence"}],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}


module.exports = chatcompletion;