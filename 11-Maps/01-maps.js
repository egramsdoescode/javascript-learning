function addToPhonebook(phoneNumber, name, phoneBook) {
    const phoneBookCopy = new Map(phoneBook);
    phoneBookCopy.set(phoneNumber, name);
    return phoneBookCopy;
}

let phoneBook = new Map();

phoneBook = addToPhonebook("444", "law dude", phoneBook);
console.log(phoneBook);
