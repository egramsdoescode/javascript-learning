function getCleanRank(reviewWords) {
    let rating = 0;
    if (reviewWords.includes("dang")) {
        rating++;
    }
    if (reviewWords.includes("heck")) {
        rating++;
    }
    if (reviewWords.includes("shoot")) {
        rating++;
    }

    switch (rating) {
        case 0:
            return "clean";
        case 1:
            return "dirty";
        default:
            return "filthy";
    }
}

const arr = ["oh", "heck", "shoot"];
console.log(getCleanRank(arr));
