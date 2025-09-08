const sendMessage = (msg) => {
    if (msg.length > 10) {
        throw new Error("Message too long");
    }
    return msg;
};

try {
    const msg = sendMessage("1");
    console.log("Message sent: ", msg);
} catch (error) {
    console.log(error.message);
}
