function processMessages(messages) {
    let success = true;
    
    console.log(`Processing messages ${messages}`);
    
    setTimeout(() => finalizeJob(success, messages), 0);    

    if (messages < 0) {
        console.log("invalid data: how do we have negative messages");
        success = false;
        return;
    }
    if (messages > 100) {
        console.log("invalid data: way too many messages");
        success = false;
        return;
    }

    console.log("Doing more stuff...");
}

function finalizeJob(success, messages) {
    const msg = success
        ? `Processed ${messages} successfully!`
        : `Failed to process messages!`;
        console.log(msg);
}

processMessages(-2);
