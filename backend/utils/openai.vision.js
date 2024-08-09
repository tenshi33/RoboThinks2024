import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


async function main() {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What’s in this image?" },
            {
              type: "image_url",
              image_url: {
                "url": "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/423555642_782407487266958_684294593920367600_n.jpg?stp=dst-jpg_p235x350&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHH9EVEDio_gXggONBprQ4ARv48GFTNkx5G_jwYVM2THtUY3uEIxfnraOsHwnhWon25pKgi2igUN7Tr9LZ6FXxa&_nc_ohc=0wlRg2VDfOEQ7kNvgEMkAPq&_nc_ht=scontent.fmnl8-6.fna&oh=00_AYA7VYvHL8OERq23xCoH75T9Qp2Rk92lxhD3kX0qY7LAiA&oe=66BBD19E",
                "detail": "low"
              },
            },
          ],
        },
      ],
    });
    console.log(response.choices[0]);
  }
  main();
