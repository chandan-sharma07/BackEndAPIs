/* Perfect Number क्या होता है

Definition

अगर किसी number के proper divisors (number को छोड़कर) का sum उसी number के बराबर हो तो वह Perfect Number होता है।

Perfect Number ⇒ Sum of divisors (excluding number) = number

Example
6

Divisors

1, 2, 3


Sum

1 + 2 + 3 = 6


So

6 → Perfect Number

28

Divisors

1, 2, 4, 7, 14


Sum

1 + 2 + 4 + 7 + 14 = 28

28 → Perfect Number */

function isPerfectNumber(n){

let sum = 0;

for(let i = 1; i < n; i++){

if(n % i === 0){
sum += i;
}

}

return sum === n;

}


//Optimise Code O(✓n)
function isPerfectNumber(n){

if(n <= 1) return false;

let sum = 1;

for(let i = 2; i <= Math.sqrt(n); i++){

if(n % i === 0){

sum += i;

if(i !== n / i){
sum += n / i;
}

}

}

return sum === n;

}
