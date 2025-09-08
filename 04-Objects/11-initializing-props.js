const balances = {
    lane: 100,
    breanna: 150,
    john: 200,
};

// We can check if a property exists and initialize it if not
if (!balances.bob) {
    balances.bob = 0;
}

console.log(balances.bob);
