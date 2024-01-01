
function findFactorialRecursive(number) {
    if (number === 1) {
        return 1;
    } 
    
    return number * findFactorialRecursive(number - 1);
}

findFactorialRecursive(5);


function findFactorialIterative(number) {
    let answer = 1;
    while (number > 0) {
        answer = answer * number;
        number--;
    }
    return answer;
}

findFactorialIterative(5);

function fibonacciIterative(n) { // O(n)
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i ++) {
        arr.push(arr[i-2] + arr[i-1]);
    }

    return arr[n];
}
fibonacciIterative(3);

function fibonacciRecursive(n) { //O(2^n)
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
fibonacciRecursive(3);