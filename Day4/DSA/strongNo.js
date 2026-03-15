/* Strong number: sum of factorial of digits = number

Example
145

1! + 4! + 5! = 145
 */
function factorial(n){

let fact = 1;

for(let i = 1; i <= n; i++){
fact *= i;
}

return fact;

}

function isStrongNumber(n){

let original = n;
let sum = 0;

while(n > 0){

let digit = n % 10;

sum += factorial(digit);

n = Math.floor(n / 10);

}

return sum === original;

}
console.log(isStrongNumber(145))