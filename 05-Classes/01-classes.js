class Message {
    constructor(recipient, sender, body) {
        this.recipient = recipient;
        this.sender = sender;
        this.body = body;
    }
}

const myMessage = new Message("Samantha", "Ethan", "I love you");
console.log(myMessage);
