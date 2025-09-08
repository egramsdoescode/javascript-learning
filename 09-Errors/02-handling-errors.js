function main() {
    try {
        logObject(getMessageRecord(1));
        logObject(getMessageRecord(2));
        logObject(getMessageRecord(3));
        logObject(getMessageRecord(4));
    } catch (err) {
        console.log(err.message);
    }
}

const records = ["Yo", "hi", "wassup"];

function logObject(message) {
    console.log(message);
}

function getMessageRecord(i) {
    if (!records[i - 1]) {
        throw new Error("Invalid indice");
    }
    return records[i - 1];
}

main();
