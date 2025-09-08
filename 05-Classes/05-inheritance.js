class Sender {
    constructor(recipient) {
        this.recipient = recipient;
    }

    sendMessage(message) {
        throw new Error(
            "sendMessage method must be implemented by child class",
        );
    }
}

class SMSSender extends Sender {
    sendMessage(message) {
        console.log(`Sending SMS to ${this.recipient}: ${message}`);
    }
}

class EmailSender extends Sender {
    sendMessage(message) {
        console.log(`Sending email to ${this.recipient}: ${message}`);
    }
}

const sms = new SMSSender("Ethan");
const email = new EmailSender("Samantha");

sms.sendMessage("Yo!");
email.sendMessage("Hello!");
