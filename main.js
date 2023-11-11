/*
# **POD Day 5 - Regular - 2Sum**

`twoSum` is a classic algorithm that many people have reported encountering 
during job interviews!

Given an array of numbers and a target number,
 return `true` if there are two numbers 
 in the array that sum up to the target value; return `false` otherwise

BONUS: Get `twoSum` to work without using nested loops


var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(target - nums[i])) {
            return true
        } else {
            return false
        }
    }
};


function twoSumTests() {
    console.log(twoSum([1, 2, 5, 7], 3), ' -> ', true);
    console.log(twoSum([1, 2, 5, 7], 5), ' -> ', false);
    console.log(twoSum([1], 5), ' -> ', false);
    console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
}

twoSumTests() // uncomment to test

function exclusiveSum(arr) {
    const total = arr.reduce((a, b) => a * b)
    return arr.map(element => total / element)
}

function exclusiveSumTests() {
    console.log(exclusiveSum([1, 3, 4, 2]), ' -> ', [9, 7, 6, 8]);
    console.log(exclusiveSum([1, 2, 5]), ' -> ', [7, 6, 3]);
    console.log(exclusiveSum([1, 2, 5, 0]), ' -> ', [7, 6, 3, 8]);
    console.log(exclusiveSum([1]), ' -> ', [0]);
}

exclusiveSumTests() // uncomment to test
*/

function repeater(char, n = 5, output = char) {
	if(output.length === 5) return output;
  repeater(char, n, output+char)
  
  if (char < n) return repeater char.length + ;
  if (char > n) return repeater char - 1;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g')); // -> 'ggggg'
console.log(repeater('j'));// -> 'jjjjj'