function reverseStr(str) {
    if (typeof str !== "string" || !str || str.length < 2) {
        return 'Not a string';
    }
    const backwardsArray = str.split('');
    let newString = '';
    for (let i = backwardsArray.length - 1; i >= 0; i--) {
        newString += backwardsArray[i];
    }
    return newString;
}

function reverseStr2(str) {
    if (typeof str !== "string" || !str || str.length < 2) {
        return 'Not a string';
    }
    return str.split('').reverse().join('');
}

const reverseStr3 = str => [...str].reverse().join('');

reverseStr("Hi My name is Maya"); //ayaM si eman yM iH
reverseStr2("Hi My name is Maya"); //ayaM si eman yM iH - More readable solution
reverseStr3("Hi My name is Maya"); //ayaM si eman yM iH - More readable ES6 solution


//mergeSortedArrays([0,3,4,31],[4,6,30])
//[0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
    const sortedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            sortedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            sortedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return sortedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);

//mergeSortedArrays2([0,3,4,31],[4,6,30])
//[0,3,4,4,6,30,31]

function mergeSortedArrays2(array1, array2) {
    return array1.concat(array2).sort((a, b) => a - b);
}

mergeSortedArrays2([0,3,4,31], [4,6,30]);


/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const sumArray = [];
    for (let i = 0; i < nums.length; i++) {
        let indexOfValue = nums.indexOf(target - nums[i], i+1);
        if (indexOfValue > i) {
            sumArray.push(i);
            sumArray.push(indexOfValue);
            break;
        }
    }
    return sumArray;
};

/* Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23. */
 
 
var maxSubArray = function(nums) { 
    let curr = nums[0];
    let max = nums[0];

    for(let i=1;i<nums.length;i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(max, curr);
    }

    return max;
}

/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0] */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let prev = 0;
    for (let next = 0; next < nums.length; next++) {
        if (nums[next] != 0) {
            let temp = nums[next];
            nums[next] = nums[prev];
            nums[prev] = temp;
            prev++;
        }
    }
};


/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};


/* Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    nums.push(...(nums.splice(0, nums.length-k)));
};


/* Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
Words may also contain numbers, for example "Hello world123 567" */

function LongestWord(sen) { 
    const regex = /[A-Za-z0-9]/g;
    let wordArray = sen.split(" ");
    let wordLength = [];
    for (let i = 0; i < wordArray.length; i++) {
      const found = wordArray[i].match(regex);
      wordLength.push(found.length);
    }
  
    let longest = Math.max(...wordLength);
    return wordArray[wordLength.indexOf(longest)];
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));