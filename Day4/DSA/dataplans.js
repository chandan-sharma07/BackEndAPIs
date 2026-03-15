const prompt = require('prompt-sync')();

// Function to calculate the total cost of a data plan
function calculateDataPlanCost(dataUsed, planLimit, planCost) {
    if (dataUsed <= planLimit) {
        return planCost;
    } else {
        const extraData = dataUsed - planLimit;
        const extraCost = extraData * 10; // Assuming $10 per GB for extra data
        return planCost + extraCost;
    }
}

// Get user input
const dataUsed = parseFloat(prompt("Enter the amount of data used (in GB): "));
const planLimit = parseFloat(prompt("Enter the data limit of your plan (in GB): "));
const planCost = parseFloat(prompt("Enter the cost of your data plan: "));
// Calculate the total cost of the data plan
const totalCost = calculateDataPlanCost(dataUsed, planLimit, planCost);
// Display the result
console.log(`The total cost of your data plan is: $${totalCost.toFixed(2)}`);
