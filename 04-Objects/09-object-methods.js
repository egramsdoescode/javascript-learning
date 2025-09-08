// Object methods are functions ran on objects, they require an object to be ran

const campaign = {
    getRemainingMessages() {
        if (this.sentMessages < this.maxMessages)
            return this.maxMessages - this.sentMessages;
        return "No more messages may be sent!";
    },
    maxMessages: 100,
    sentMessages: 70,
    name: "Welcome Campaign",
};

console.log(campaign.getRemainingMessages());
