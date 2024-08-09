export default async function insertToDB(inputDB) {
    try {
        const response = await fetch('http://localhost:3000/api/chathistory/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: inputDB.question, answer: inputDB.answer }),
        });

        if (response.ok) {
            const data = await response.json(); // Parse the response JSON
            console.log('Response data:', data); // Log the response data if needed
        } else {
            console.error('Response status in insertToDB:', response.status); // Log the status for debugging
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
