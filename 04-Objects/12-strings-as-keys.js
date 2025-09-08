function getProviderCount(provider, counts) {
    return counts[provider] || 0;
}

const counts = {
    ATT: 10,
    Verizon: 5,
};

console.log(getProviderCount("Verizon", counts));
console.log(getProviderCount("", counts));
