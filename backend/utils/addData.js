import Query from "../models/chathistory.model.js";

const addData = async ({question,answer}) => {
    try {
        const user = await Query.create({ question, answer });
        //console.log(user);
        return user;
    } catch (error) {
        throw new error(error.message);
    }

}

export default addData;
