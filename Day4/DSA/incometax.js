const prompt = require("prompt-sync")();

// Function to calculate income tax
function calculateIncomeTax(income) {
    let tax = 0;
    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 750000) {
        tax = (income - 500000) * 0.1 + 12500;
    } else if (income <= 1000000) {
        tax = (income - 750000) * 0.15 + 37500;
    } else if (income <= 1250000) {
        tax = (income - 1000000) * 0.2 + 75000;
    } else if (income <= 1500000) {
        tax = (income - 1250000) * 0.25 + 125000;
    } else {
        tax = (income - 1500000) * 0.3 + 187500;
    }   
    return tax;
}
// Get user input
const income = parseFloat(prompt("Enter your annual income: "));
// Calculate the income tax
const taxAmount = calculateIncomeTax(income);
// Display the result
console.log(`The income tax for an annual income of ${income} is: ${taxAmount.toFixed(2)}`);
