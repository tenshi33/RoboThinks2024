import insertToDB from "./insertToDB.js";


export default async function chatcompletion(mess){
    const message = mess;
    try {
        const result = await fetch('http://localhost:3000/api/chatcompletion',{
            method : 'POST',
            headers :{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: message})
    });


    if (result.ok) {
        const data = await result.json(); // Parse the response JSON
        const inputDB = {question:message,answer:data}
        //insertToDB(inputDB)
        //console.log('Response data:', data); // Log the response data if needed
        return data;
    } else {
        console.error('Response status:', result.status); // Log the status for debugging
    }
    }catch(error){
        console.error('Error fetching data:', error);
    }
}


