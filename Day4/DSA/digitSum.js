/* 
Input: 123
Output: 6
1 + 2 + 3 = 6 
*/
function digitSum(n) {

let sum = 0;

while(n > 0){

let digit = n % 10;
sum += digit;

n = Math.floor(n / 10);

}

return sum;

}
console.log(digitSum(123))