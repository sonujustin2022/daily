// 🚀 Now the Final Boss (Day 1)

// 👉 Second Largest Number

// Take your time — this is where real problem-solving kicks in.

// Send your solution 💪

// const secondLgNum = (arr) =>{
//     let sortedArr = arr.toSorted((sm,lg)=>lg-sm);
//     return sortedArr[1];
// }

// console.log(secondLgNum([1,2,4,5,6,10,15]))

// const secondLgNum = (arr) => {
//   let largest = 0;
//   let SecondLgst = 0;

//   for (let value of arr) {
//     if (value > largest) {
//       largest = value;
//     }
//   }
//   for (let value of arr){
//     if(value>SecondLgst && value <largest){
//         SecondLgst = value;
//     }
//   }

//   return SecondLgst;

// };

// console.log(secondLgNum([12, 10, 13, 5, 9, 1,25,29,98,99]));

const secondLgNum = (arr) => {
  let largest = -Infinity;
  let SecondLgst = -Infinity;

  for (let value of arr) {
    if (value > largest) {
        SecondLgst = largest;
      largest = value;
    } else if (value >SecondLgst && value !== largest){
        SecondLgst = value;
    }
  }
  return SecondLgst;

};

console.log(secondLgNum([12, 10, 13, 5, 9, 1,25,29,98,99]));


