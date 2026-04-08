// Final Challenge (Day 2 Boss 🔥)
// 👉 Problem 5: Missing Number
// missingNum([1,2,4,5])
// // Output: 3

// const missingNum = (arr) =>{

//     let arrLength = arr.length;
//     isSame = false;

//     for(let i = 0;i<arrLength;i++){
//         if(arr[i]===i+1){
//             isSame =true;
//         }else {
//             return i+1;
//         }

//     }
//     return "no number missing"

// }


const missingNum = (arr) => {
  let n = arr.length + 1;

  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, val) => sum + val, 0);

  return expectedSum - actualSum;
}

console.log(missingNum([1,2,4,5]))