const fs = require("fs");

fs.writeFile("data/entries/log.txt", "hello i am soriful hasan", (err) => {
  if (err) {
    console.log(err.message);
  }
});

fs.appendFileSync("data/entries/log.txt", "\n hello i am soriful hasan");
console.log("file created successfuly");
