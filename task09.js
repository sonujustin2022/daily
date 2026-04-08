//  Problem 4: Remove Duplicates
// removeDup([1,2,2,3,4,4])
// // Output: [1,2,3,4]

// Send your solution 💪

const removeDup = (arr) =>{

    let count = {};
    let newArr = [];
    for(let value of arr){
        if(!Object.hasOwn(count,value)){
            count[value] = 1;
            newArr.push(value);
        }
    }
    return newArr;

}

console.log( removeDup([1,2,2,3,4,4,5,5,5,6,7]))