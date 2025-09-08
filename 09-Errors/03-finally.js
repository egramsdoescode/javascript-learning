function cleanup() {
    try {
        throw new Error("Textio processing failed");
    } catch (err) {
        throw new Error("Error in catch block" + err);
    } finally {
        console.log("I too am in this episode");
    }
}

cleanup();
