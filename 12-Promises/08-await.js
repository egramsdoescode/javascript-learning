// ?

console.log(message);

function updateMessageStatus(messageId, currentStatus, isDelivered) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (currentStatus === "Sending" && isDelivered) {
                resolve(`Textio Message ${messageId} has been delivered.`);
            } else if (currentStatus === "Sending" && !isDelivered) {
                reject(`Textio Message ${messageId} cannot be delivered.`);
            } else {
                resolve(
                    `Textio Message ${messageId} status updated to ${currentStatus}.`,
                );
            }
        }, 500);
    });
}
