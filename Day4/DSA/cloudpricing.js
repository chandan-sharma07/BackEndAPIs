const prompt = require('prompt-sync')();
// Function to calculate the total cost of a cloud service
function calculateCloudCost(usageHours, costPerHour) {
    return usageHours * costPerHour;
}
// Get user input
const usageHours = parseFloat(prompt("Enter the number of hours the cloud service was used: "));
const costPerHour = parseFloat(prompt("Enter the cost per hour for the cloud service: "));
// Calculate the total cost of the cloud service
const totalCost = calculateCloudCost(usageHours, costPerHour);
// Display the result
console.log(`The total cost of the cloud service is: $${totalCost.toFixed(2)}`);
