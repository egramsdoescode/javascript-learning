const user = {
    name: "Default user",
    typer: "user",
};

const adminUser = Object.create(user);
adminUser.type = "admin";

const admin = Object.create(adminUser);

function isAdmin(obj) {
    return Object.getPrototypeOf(obj).type === "admin";
}

console.log(isAdmin(admin));
