// 👉 Problem 4: Sum of Array

// Task:

// sumArr([1, 2, 3, 4])
// // Output: 10

// 👉 Try:

// Normal loop (recommended)

// const arrSum = (arr)=>{
//     let sum = 0;

//     for(let value of arr){
//         sum += value;
//     }
//     return sum;
// }

// console.log(arrSum([1,2,3]))


// Then maybe reduce()

const arrSum = (arr) =>{
  return  arr.reduce((accu,curr)=>accu+curr,0);
}

console.log(arrSum([1,2,4]))
