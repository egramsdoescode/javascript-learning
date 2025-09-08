function createError(message) {
    return new Error("Error: " + message);
}

const err = createError("You messed up, man");

console.log(err.message);
