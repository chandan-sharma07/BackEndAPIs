/* 
Input: 123
Output: 321
 */
function reverseNumber(n){

let reverse = 0;

while(n > 0){

let digit = n % 10;

reverse = reverse * 10 + digit;

n = Math.floor(n / 10);

}

return reverse;

}
console.log(reverseNumber(145))