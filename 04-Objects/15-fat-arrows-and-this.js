const campaign = {
    name: "Welcome Campaign",
    maxMessages: 100,
    sentMessages: 30,
    sendMessage() {
        this.sentMessages++;
    },
};

console.log(`sentMessages before arrow function ${campaign.sentMessages}`);
campaign.sendMessage(campaign.sentMessages);
console.log(`sentMessages after arrow function ${campaign.sentMessages}`);
