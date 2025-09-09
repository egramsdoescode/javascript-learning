function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(`Resolved after ${ms / 1000} seconds`), ms));
}

try {
    const promise = await sleep(2000);
    console.log(promise);
} catch (error) {
    console.log(error);    
}

try {
    const promise = await sleep(2500);
    console.log(promise);
} catch (error) {
    console.log(error);    
}

