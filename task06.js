// Task:
// Count how many times each number appears.

// countFreq([1, 2, 2, 3, 1, 2])
// // Output: {1: 2, 2: 3, 3: 1}

// 👉 Focus:

// Object usage
// Counting pattern

const countFreq = (arr) =>{

    let count = {};
    for(let value of arr){
        if(Object.hasOwn(count,value)){
            count[value] +=1;
        }else{
            count[value] = 1;
        }
    }
    return count;

}

console.log(countFreq([1, 2, 2, 3, 1, 2]));