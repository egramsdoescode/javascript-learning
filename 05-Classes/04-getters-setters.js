class Contact {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }

    get phoneNumber() {
        const phoneNumber = this._phoneNumber;
        const formattedNumber = `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
        return formattedNumber;
    }
    set phoneNumber(phoneNumber) {
        if (phoneNumber.length !== 10) {
            throw new Error("Invalid phone number");
        }
        this._phoneNumber = phoneNumber;
    }
}

const myContact = new Contact("Ethan", "8004444444");

console.log(myContact.phoneNumber);
myContact.phoneNumber = "8006666666";
console.log(myContact.phoneNumber);
