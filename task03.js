// Write a function to reverse an array manually.

// reverseArr([1, 2, 3])
// // Output: [3, 2, 1]

//using reverse method

// const reverse = (arr)=>{
//     return arr.reverse();
// }

// console.log(reverse([1,2,3]))

const reverseArr = (arr)=>{
    
    let arrlength = arr.length;
   let revArr = [];
    
   for(let i = arrlength-1;i>=0;i--){
    revArr.push(arr[i]);
   }
   return revArr;
}

console.log(reverseArr([1,2,3,5,6]))