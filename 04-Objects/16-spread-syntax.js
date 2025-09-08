function mergeTemplates(defaultTemplates, customTemplates) {
    return { ...defaultTemplates, ...customTemplates };
}

const defaultTemplate = {
    name: "Ethan",
    age: 28,
    location: "Austin",
};

const customTemplate = {
    favoritColor: "Green",
    job: "Recreation Aide",
    age: 27,
};

// Be mindful that if you have a property that is shared between the two, they will be merged into one. In this case, age becomes 27
console.log(mergeTemplates(defaultTemplate, customTemplate));

// You can also use the spread operator on arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];

console.log(combinedArr);
