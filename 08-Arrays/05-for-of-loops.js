const getCleanMessages = (messages, badWord) => {
    const cleanMessages = [];
    for (let msg of messages) {
        if (msg.toLowerCase() !== badWord.toLowerCase()) {
            cleanMessages.push(msg);
        }
    }
    return cleanMessages;
};

const arr = ["heck", "darn", "toot"];

console.log(getCleanMessages(arr, "heck"));

// This right here is the cleanest way to do this. Do this instead irl
// messages.filter((msg) => msg !== badWord)
