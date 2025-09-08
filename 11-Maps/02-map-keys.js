function createUserMap(users) {
    const userMap = new Map();
    for (let user of users) {
        userMap.set(user.fname + " " + user.lname, user);
    }
    return userMap;
}

function createUserMapCoolWay(users) {
    return new Map(users.map((user) => [`${user.fname} ${user.lname}`, user]));
}

const users = [
    {
        userID: 1,
        fname: "Ethan",
        lname: "Grams",
    },
    {
        userID: 2,
        fname: "ThePrime",
        lname: "Agen",
    },
];

console.log(createUserMap(users));
console.log(createUserMapCoolWay(users));
