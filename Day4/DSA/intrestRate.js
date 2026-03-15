const prompt = require('prompt-sync')();

// Function to calculate the interest rate
function calculateInterestRate(principal, rate, time) {
    return (principal * rate * time) / 100;
}
// Get user input
const principal = parseFloat(prompt('Enter the principal amount: '));
const rate = parseFloat(prompt('Enter the interest rate (in %): '));
const time = parseFloat(prompt('Enter the time (in years): '));
// Calculate the interestrate
const interest = calculateInterestRate(principal, rate, time);
// Display the result
console.log(`The interest amount is: ${interest.toFixed(2)}`);

