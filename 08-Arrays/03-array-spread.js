const oldMessages = ["Wassup", "gg", "glhf"];
const newMessages = ["hey", "sdiybt", "squarebob"];

const uploadNewMessages = (oldMessages, newMessages) => {
    return [...oldMessages, ...newMessages];
};
console.log(uploadNewMessages(oldMessages, newMessages));
