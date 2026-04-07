// Task:
// Write a function to find the largest number in an array.

const findMax = (arr)=>{
 return arr.reduce((accu,curr)=>accu>curr?accu:curr)
}

console.log(findMax([3,45,6,78]))