// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib2(n) { //exponential runtime (2^n)
    if(n<2) return n
    return fib(n-2) + fib(n-1)

}

function fib(n) {
    let result = [0,1]
    for(let i = 2; i<=n; i++){
        result.push(result[i-2] + result[i-1])
    }

    return result[result.length-1]

}

module.exports = fib;
