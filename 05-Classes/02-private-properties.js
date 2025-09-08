class Message {
    #createdAt;
    constructor(recipient, sender, body) {
        this.recipient = recipient;
        this.sender = sender;
        this.body = body;
        this.#createdAt = new Date();
    }
}

const myMessage = new Message("Samantha", "Ethan", "I love you");
console.log(myMessage);
