const campaign = {
    name: "Welcome Campaign",
    maxMessages: 100,
    sentMessages: 30,
    sendMessage() {
        this.sentMessages++;
    },
};

// When passing an object method as a callback function, if it has the this keyword, make sure to bind it as shown below
function sendWelcome(name, callback) {
    callback();
    console.log(`Sending: "Welcome ${name}! We are so glad you're here!"`);
}

console.log("Campaign Messages: ", campaign.sentMessages);

sendWelcome("Tyler", campaign.sendMessage.bind(campaign));

console.log("Campaign Messages: ", campaign.sentMessages);
