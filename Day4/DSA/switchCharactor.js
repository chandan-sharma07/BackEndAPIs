const prompt = require("prompt-sync")();
let string = prompt("Enter a string: ");
let constent = 0, vowel = 0;
for(let i = 0; i < string.length; i++) {
    switch(string[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowel++;
            break;
        default:
            constent++;
    }
}
console.log("Consonants: " + constent);
console.log("Vowels: " + vowel);