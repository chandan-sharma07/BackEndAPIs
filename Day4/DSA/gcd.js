/* GCD (Greatest Common Divisor)

Meaning:

दो numbers का सबसे बड़ा common factor


Example

12 , 18


Factors

12 → 1 2 3 4 6 12
18 → 1 2 3 6 9 18


Common

1 2 3 6


Largest

6 */
function gcd(a,b){

while(b !== 0){

let temp = b
b = a % b
a = temp

}

return a

}
