// Problem 2: First Non-Repeating Element
// firstUnique([1, 2, 2, 3, 1, 4])
// // Output: 3

// 👉 Use your countFreq logic.

const firstUnique = (arr) =>{
    let repeatValue = {};
    for(let value of arr){
        if(Object.hasOwn(repeatValue,value)){
        repeatValue[value] += 1;    

        }else {
            repeatValue[value] = 1;
        }
    }

    for(let value of arr){
        if(repeatValue[value] ===1){
            return value;
        }
    } 
    return "no repeat value"
}

console.log(firstUnique([1, 2, 2, 3, 1, 4]))