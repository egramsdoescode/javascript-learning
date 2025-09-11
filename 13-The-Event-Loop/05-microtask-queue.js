async function processAnalytics(data) {
    let analysis = "";

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(analysis);
        }, 100);

        setTimeout(() => {
            analysis += "- Finished!\n";
        }, 0);

        Promise.resolve().then(() => {
            analysis += `- Processing ${data}\n`;
        });

        analysis += "Analyzing...\n";
    });
}

try {
    const analysis = await processAnalytics("TEST DATA");
    console.log(analysis);
} catch (error) {
    console.log(error);
}
