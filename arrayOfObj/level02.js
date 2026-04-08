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
const employees = [
  { name: "A", dept: "IT", salary: 2000 },
  { name: "B", dept: "HR", salary: 3000 },
  { name: "C", dept: "IT", salary: 4000 },
  { name: "D", dept: "HR", salary: 1000 },
];

// 👉 Output:
// {
//   IT: 6000,
//   HR: 3000
// }

let deptTotalSalary = {};

for(let emp of employees){
    if(Object.hasOwn(deptTotalSalary,emp.dept)){
        deptTotalSalary[emp.dept] += emp.salary;

    }else {
        deptTotalSalary[emp.dept] = emp.salary;
    }
}

console.log(deptTotalSalary);