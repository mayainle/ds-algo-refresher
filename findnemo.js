// Speed complexity 

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}

findNemo(large); // O(n) --> Linear Time


const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) - Constant time

const boxes1 = [1,2,3,4,5];

function logAllPairsOfArray(array) {
    array.forEach(box => {
        array.forEach(box1 => {
            console.log(box, box1);
        });
    })
}

logAllPairsOfArray(boxes1); //O(n * n) === O(n^2) - Quadratic Time

//O(n!) - worst one, adding a loop for every element

/**
 * Three pillars of programming are:
 *      - readable code
 *      - scalable code:    
 *          - speed: time complexity
 *          - memory: space complexity
 */

// Space complexity 

// Heap we store variables we assign values to
// Stack we keep track of our function calls

function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boooo!');
    }
}

booooo([1,2,3,4,5]); // O(1) - space Complexity

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); //O(n) - space complexity
