
const users = [
  { id: 1, name: "Sonu", age: 22 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Anu", age: 20 },
];

// // level -01------------------------------------
// // 1. Get all names
// let allNames = users.map((eachUser) => eachUser.name); //Interview-ready explanation (2 lines)
// console.log(allNames);

// // 2. Filter adults
// // 👉 Return users with age ≥ 21
// let adults = users.filter(eachUser => eachUser.age>=21);
// console.log(adults)

// // 3. Find a user
// // 👉 Find user with id = 2
// let userId02 = users.find(eachUser=>eachUser.id === 2);
// console.log(userId02);

// // 4. Add new property
// // 👉 Add isAdult: true/false based on age

// users.forEach(eachUser => {
//     if(eachUser.age>=21){
//         eachUser['adults'] = true;
//     }else {
//         eachUser['adults'] = false; 
//     }
// });

// console.log(users)

// map() is used to transform each object by adding a new property.
// It returns a new array without mutating the original array.

