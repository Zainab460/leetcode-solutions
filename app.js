// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104

//FIZZBUZZ


var fizzbuzz = function(n) {
    let output= []
    for (let i = 1; i <= 15 ; i++) {

        if(i % 3 ===0 && i % 5 === 0) {
            output.push("Fizzbuzz")
        }
        else if (i % 3 === 0) {
            output.push("Fizz")
        }
        else if (i % 5 === 0){
            output.push("Buzz")
        }
        else{
            output.push(i.toString())
        }
    }
    return (output)
};
console.log(fizzbuzz())


let answers =[];
for (let i = 1; i < 104 ; i++) {
    if(i % 3 ===0 && i % 5 === 0) {
        answers.push("fizzbuzz")
    }
    else if (i % 3 === 0) {
        answers.push("fizz")
    }
    else if (i % 5 === 0){
        answers.push("buzz")
    }
    else{
        answers.push(i)
    }
}
console.log(answers)

// SINGLE NUMBER
var singleNumber = function(array) {
    
    let arrayLength =array.length;

    for(let i = 0 ; i < array.length; i++){
        
        let item = array[0];
        array =array.slice(1)
        console.log("array",array);
        if(array.indexOf(item) === -1){
            
            return item ;
        }
        else {
            array.splice(array.indexOf(item), 1);
            console.log("array",array);
        }
    }
};

// TWO....SUMS
function twoSum(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {

      for (let j = i + 1; j < nums.length; j++) {

        if (nums[i] + nums[j] === target) {

          return [i, j];
        }
      }
    }
  }

PLUS ONE

let plusOne = function(digits) {
    for(let i = digits.length -1; i >= 0; i--) {
        if(digits[i] != 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits

};


// PALINDROME
function isPalindrome(num) {
    const n =num;
    if(n < 0 || n>2**32){
        return false
    }

    
    rev = 0;
    while(num > 0){
        let digit = num%10
        rev =rev*10 +2
        num = parseInt(num/10)
    }

    if(rev === n){
        return true
    } else{
        return false
    }

}
console.log(isPalindrome(121))


// ROMAN TO INTEGER
var romanToInt = function (string) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const strLen = string.length;
    let total = 0;

    // Loop through the letters
    for (let i = 0; i < strLen; i++) {
        // Check if the current letter is followed by one with a higher value (indicating a deduction)
        if (i < strLen - 1 && numerals[string[i + 1]] > numerals[string[i]]) {
            // Remove the current letter's numeric value from the total
            total -= numerals[string[i]];
        } else {
            // Add the current letter's numeric value to the total
            total += numerals[string[i]];
        }
    }

    return total;
};
console.log(romanToInt("IIIIXCV"))