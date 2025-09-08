function bulkSendCost(numMessages) {
    let result = 0;

    for (let i = 0; i < numMessages; i++) {
        result += 100 + i;
    }
    console.log(Math.round((result / 100) * 100) / 100);
}

bulkSendCost(2);
