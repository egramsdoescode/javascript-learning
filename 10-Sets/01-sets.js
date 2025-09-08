function deduplicateEmails(emails) {
    // Enclosing it in square brackets with the spread operator behind it will store all the values in the set into a new array
    return [...new Set(emails)];
}

const emails = ["hey", "hi", "hi", "hi", "wassup"];

console.log(deduplicateEmails(emails));
