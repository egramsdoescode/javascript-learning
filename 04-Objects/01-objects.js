function createMessage(phoneNumber, message) {
    const phoneMessage = {
        phoneNumber: phoneNumber,
        message: message,
        messageLength: message.length,
    };
    return phoneMessage;
}

const result = createMessage("555-5555", "Hello!");

console.log(result.phoneNumber, result.message, result.messageLength);
