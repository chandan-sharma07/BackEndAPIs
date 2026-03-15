/* 
Armstrong = sum of cubes of digits = number

Example
153

1³ + 5³ + 3³ = 153
*/
function isArmstrong(n){

let original = n;
let sum = 0;

while(n > 0){

let digit = n % 10;

sum += digit ** 3;

n = Math.floor(n / 10);

}

return sum === original;

}
console.log(isArmstrong(153))