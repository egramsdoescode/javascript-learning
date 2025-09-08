function fixUserMap(brokenMap) {
    const fixedMap = new Map();
    for (const [key, value] of brokenMap) {
        const newKey = `${key.fname} ${key.lname}`;
        fixedMap.set(newKey, value);
    }
    return fixedMap;
}

const brokenMap = new Map();

brokenMap.set(
    {
        fname: "Ethan",
        lname: "Grams",
    },
    {
        userID: 1,
        fname: "Ethan",
        lname: "Grams",
    },
);

brokenMap.set(
    {
        fname: "ThePrime",
        lname: "Agen",
    },
    {
        userID: 2,
        fname: "ThePrime",
        lname: "Agen",
    },
);

const fixedMap = fixUserMap(brokenMap);

console.log(fixedMap);
console.log(fixedMap.get("Ethan Grams"));
