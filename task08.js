// Problem 3: Palindrome (without .reverse())
// isPalindrome("madam") // true
// isPalindrome("hello") // false

// 👉 Hint:

// Compare start and end
// Move inward

const isPalindrome = (str) =>{
    let checkArr = [];
    let strArr = str.split('');
    let arrLength = strArr.length;

    for(let i = arrLength-1;i>=0;i--){
        checkArr.push(strArr[i]);
    }
 
  return str === checkArr.join('')

}
console.log(isPalindrome("madam"))