class Message {
    static totalMessageLength = 0;
    static totalMessages = 0;
    constructor(recipient, sender, body) {
        this.recipient = recipient;
        this.sender = sender;
        this.body = body;
        Message.totalMessages++;
        Message.totalMessageLength += body.length;
    }

    static getAverageMessageLength() {
        const average = Message.totalMessageLength / Message.totalMessages;
        return Math.round(average * 100) / 100;
    }
}

const myMessage = new Message("Samantha", "Ethan", "I love you");
const yourMessage = new Message("Samantha", "Ethan", "I you");

console.log(Message.getAverageMessageLength());
