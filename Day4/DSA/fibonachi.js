/* Fibonacci Series (सबसे आसान तरीका)

Rule:

next number = previous two numbers का sum


Example

0 1 1 2 3 5 8 13


Explanation

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5 */

function fibonacci(n){

let a = 0
let b = 1

for(let i=0;i<n;i++){

console.log(a)

let next = a + b
a = b
b = next

}

}