/* 
121 → palindrome
123 → not palindrome
 */
function isPalindrome(n){

let original = n;
let reverse = 0;

while(n > 0){

let digit = n % 10;

reverse = reverse * 10 + digit;

n = Math.floor(n / 10);

}

return reverse === original;

}
console.log(isPalindrome(121))

