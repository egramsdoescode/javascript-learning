class Sender {
    constructor(recipient) {
        this.recipient = recipient;
    }

    formatMessage(message) {
        return `To ${this.recipient}, Message: ${message}`;
    }
}

class SMSSender extends Sender {
    constructor(recipient) {
        super(recipient);
    }
    formatMessage(message) {
        return `${super.formatMessage(message)} [SMS]`;
    }
}

class EmailSender extends Sender {
    constructor(recipient) {
        super(recipient);
    }
    formatMessage(message) {
        return `${super.formatMessage(message)} [EMAIL]`;
    }
}

const sms = new SMSSender("Ethan");
const email = new EmailSender("Samantha");

console.log(sms.formatMessage("Hello"));
console.log(email.formatMessage("Yo"));
