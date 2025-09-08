// Object methods can also mutate properties in the object like with the sendMessage method below

const campaign = {
    getRemainingMessages() {
        if (this.sentMessages < this.maxMessages)
            return this.maxMessages - this.sentMessages;
        return "No more messages may be sent!";
    },
    sendMessage() {
        this.sentMessages++;
        return "Message sent!";
    },
    maxMessages: 100,
    sentMessages: 70,
    name: "Welcome Campaign",
};

console.log(campaign.getRemainingMessages()); // 30
console.log(campaign.sendMessage()); // "Message sent!"
console.log(campaign.getRemainingMessages()); // 29
