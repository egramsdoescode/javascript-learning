const textionSetupCompleteWait = 400;
const errorHandlingWait = 300;
const messageRoutingWait = 200;
const smsProvidersWait = 100;

// Prints fifth
setTimeout(
    () => console.log("Textio setup complete!"),
    textionSetupCompleteWait,
);

// Prints fourth
setTimeout(
    () => console.log("Setting up error handling and retries..."),
    errorHandlingWait,
);

// Prints third
setTimeout(
    () => console.log("Configuring message routing..."),
    messageRoutingWait,
);

// Prints second
setTimeout(
    () => console.log("Connection to SMS providers..."),
    smsProvidersWait,
);

// Prints first
console.log("Starting Textio service initialization...");

// NOTE: using await top-level outside of async is only allowed in es modules, not commonJS
await sleep(2500);
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
