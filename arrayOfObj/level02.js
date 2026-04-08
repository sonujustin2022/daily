// // 1. Total Salary (Basic Reduce)
// const employees = [
//   { name: "A", salary: 2000 },
//   { name: "B", salary: 3000 },
//   { name: "C", salary: 4000 }
// ];

// // 👉 Return: 9000

// let totalSalary = employees.reduce((accu,curr)=>accu+curr.salary,0);
// console.log(totalSalary)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2. Salary by Department (Grouping)
// const employees = [
//   { name: "A", dept: "IT", salary: 2000 },
//   { name: "B", dept: "HR", salary: 3000 },
//   { name: "C", dept: "IT", salary: 4000 },
//   { name: "D", dept: "HR", salary: 1000 },
// ];

// // 👉 Output:
// // {
// //   IT: 6000,
// //   HR: 3000
// // }

// let deptTotalSalary = {};

// for(let emp of employees){
//     if(Object.hasOwn(deptTotalSalary,emp.dept)){
//         deptTotalSalary[emp.dept] += emp.salary;

//     }else {
//         deptTotalSalary[emp.dept] = emp.salary;
//     }
// }

// console.log(deptTotalSalary);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // 3. Group Users by Age Range
// const users = [
//   { name: "A", age: 17 },
//   { name: "B", age: 25 },
//   { name: "C", age: 40 },
//   { name: "D", age: 15 }
// ];

// // 👉 Group into:
// // {
// //   minor: [...],
// //   adult: [...]
// // }

// let groups = {adults:[],minors:[]};

// users.forEach(eachUser => {
//     if(eachUser.age>=18){
//     groups['adults'].push(eachUser) ;
//     }else{
//         groups['minors'].push(eachUser);
//     }
// })
// console.log(groups)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4. Count Occurrences (Very Important)
const orders = [
  { mode: "gpay" },
  { mode: "phonepe" },
  { mode: "gpay" },
  { mode: "paytm" },
  { mode: "gpay" },
  { mode: "applePay" },
];

// // 👉 Output:
// // {
// //   gpay: 3,
// //   phonepe: 1,
// //   paytm: 1
// // }

let paymentCounts = {};

orders.forEach(eachOrder =>{
    if(Object.hasOwn(paymentCounts,eachOrder.mode)){
        paymentCounts[eachOrder.mode] += 1;

    }else {
        paymentCounts[eachOrder.mode] = 1;
    }
});

// console.log(paymentCounts)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5. Most Used Payment Mode

// 👉 From above data
// 👉 Output: "gpay"

let countArr = Object.entries(paymentCounts);
console.log(countArr)

let highestPayCount = countArr.reduce((accu,curr)=>accu[1]>curr[1]?accu:curr);
console.log(highestPayCount[0])
