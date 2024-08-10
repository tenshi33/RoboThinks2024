import Query from "../models/chathistory.model.js";

const addData = async ({question,answer}) => {
    try {
        const user = await Query.create({ question, answer });
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export default addData;
