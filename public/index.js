// start the server first and enter the node public/index.js in terminal 
async function chatcompletion(mess){
    message = mess;
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
        insertToDB(inputDB)
        console.log('Response data:', data); // Log the response data if needed
    } else {
        console.error('Response status:', result.status); // Log the status for debugging
    }
    }catch(error){
        console.error('Error fetching data:', error);
    }
}


async function insertToDB(inputDB){
    try{
        const result = await fetch('http://localhost:3000/api/chathistory/query',{
            method : 'POST',
            headers :{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: inputDB.question, answer: inputDB.answer })
    });
        if (result.ok) {
            const data = await result.json(); // Parse the response JSON
            console.log('Response data:', data); // Log the response data if needed
        } else {
            console.error('Response status in insertDB:', result.status); // Log the status for debugging
        }
    }catch(error){
        console.error('Error fetching data:', error);
    }

}


message = "who is alan turing";
chatcompletion(message)