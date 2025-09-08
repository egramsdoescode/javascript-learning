const printMatchingProperties = (studentRecord, searchTerm) => {
    for (const key in studentRecord) {
        if (key.startsWith(searchTerm)) {
            console.log(`Found ${key} -> ${studentRecord[key]}`);
        }
    }
};

const studentRecord = {
    studentId: "bib016",
    studentName: "Ethan",
    major: "Computer Science",
};

printMatchingProperties(studentRecord, "student");
