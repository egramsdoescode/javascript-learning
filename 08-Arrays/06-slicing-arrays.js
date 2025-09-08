function splitLogs(logs, slug) {
    for (let i = 0; i < logs.length; i++) {
        if (logs[i].toLowerCase() === slug.toLowerCase()) {
            return {
                before: logs.slice(0, i),
                after: logs.slice(i + 1),
                i: i,
            };
        }
    }
    return {
        before: [],
        after: [],
        i: -1,
    };
}

const logs = ["smooch", "kiss", "poop", "tiger"];

console.log(splitLogs(logs, "tiger"));
