const heroes = new Set(["eren", "mikasa", "armin", "reiner"]);
const villains = new Set(["eren", "reiner", "bertholdt", "annie"]);

// intersection returns a new set containing elements in that are inboth sets
const same = heroes.intersection(villains);

// difference returns a new set containing elements in first set but not second set
const nonVillains = heroes.difference(villains);

// union returns a new set containing all elements in both sets
const everyone = heroes.union(villains);

console.log("Both: ", same);
console.log("Non-Villains: ", nonVillains);
console.log("Everyone: ", everyone);
