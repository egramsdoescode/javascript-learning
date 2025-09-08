const isSpamMessage = (message) => {
    if (message.toLowerCase().includes("offer")) {
        return true;
    }
    if (message.toLowerCase().includes("free")) {
        return true;
    }
    return false;
};

console.log(isSpamMessage("Here is your offer!"));
console.log(isSpamMessage("Big chungus!"));
console.log(isSpamMessage("Free vbucks!"));
