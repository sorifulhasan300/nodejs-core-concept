const fs = require("fs");

const text = fs.readFileSync("data/entries/diary.txt", "utf-8");
console.log(text);
