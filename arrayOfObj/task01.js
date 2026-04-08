// 1. Get all names
const users = [
  { id: 1, name: "Sonu", age: 22 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Anu", age: 20 }
];

// 👉 Return: ["Sonu", "Rahul", "Anu"]

let allNames = users.map(eachValue => eachValue.name);
console.log(allNames);