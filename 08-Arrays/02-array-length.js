const usernames = [];
usernames.push("pewdiepie");

const getMostRecentUser = (usernames) => {
    return usernames.length > 0 ? usernames[usernames.length - 1] : null;
};

console.log(getMostRecentUser(usernames));
