const prompt = require("prompt-sync")();
// Function to calculate discount
function calculateDiscount(prise, discount) {
    return (prise * discount) / 100;
}
// Get user input
const prise = parseFloat(prompt("Enter the original price: "));
const discount = parseFloat(prompt("Enter the discount percentage: "));
// Calculate the discount amount and the final price
const discountAmount = calculateDiscount(prise, discount);
const finalPrice = prise - discountAmount;
// Display the results
console.log(`The discount amount is: ${discountAmount.toFixed(2)}`);
console.log(`The final price after discount is: ${finalPrice.toFixed(2)}`);