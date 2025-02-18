function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate through the array
user.forEach(name => console.log(greeter(name)));

// Solution 2: Join the array elements into a single string
const userString = user.join(", ");
console.log(greeter(userString));