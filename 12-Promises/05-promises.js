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

try {
    const messageStatus1 = await updateMessageStatus("1", "Sending", true);
    console.log(messageStatus1);
} catch (error) {
    console.log(error);
}

try {
    const messageStatus2 = await updateMessageStatus("2", "Sending", false);
    console.log(messageStatus2);
} catch (error) {
    console.log(error);
}

try {
    const messageStatus3 = await updateMessageStatus("3", "Queued", true);
    console.log(messageStatus3);
} catch (error) {
    console.log(error);
}
