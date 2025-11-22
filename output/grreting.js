const args = process.argv;

const name = args[2] || "guest";
const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good Morning";
} else if (time > 12) {
  greeting = "Good Evening";
} else {
  greeting = "hour not found";
}
console.log(greeting + ` ${name}`);
