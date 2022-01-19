// Fibonacci number
const maxN = 1000
var memo = new Array(maxN)
const fib = (n) =>{
    if (n <=1) return n
    if (memo[n]) return memo[n]
    return memo[n] = fib(n-1) + fib(n-2)
}
console.log(fib(10))
