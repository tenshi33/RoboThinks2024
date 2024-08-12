
import path from "path";
import chatcompletion from "../utils/chatcompletion.js";
import ConvertTextToSpeech from "../utils/TTSopenai.js";
import transcribeAudio from "../utils/STTopenai.js";



const speechFile = path.resolve('./client/src/convertedSpeech.wav');


//try
const message = "who is BMM";
const result = await chatcompletion(message);
console.log(result);
ConvertTextToSpeech(result);
.then(()=>{
    transcribeAudio(speechFile);
});
