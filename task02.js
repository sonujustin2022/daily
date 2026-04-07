// Return how many even numbers are in an array.

// countEven([1, 2, 3, 4, 6])
// // Output: 3

// const countEven = (arr) =>{
// let evenNumbers =  arr.filter(eachValue=>eachValue%2==0);
// return evenNumbers.length;
// }

// console.log(countEven([1, 2, 3, 4, 6,13,67,12,55,62,45,78]));


//using loop

const countEven = (arr)=>{
    let count = 0;
    for(let value of arr){
        if(value %2===0){
            count++;
        }
    }
    return count;
};

console.log(countEven([1, 2, 3, 4, 6,9,11,13,14,16,18]));