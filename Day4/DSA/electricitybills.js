const prompt = require("prompt-sync")();
// Function to calculate electricity bill
function calculateElectricityBill(units) {
    const slabs = [
        { limit: 100, rate: 4.2 },
        { limit: 100, rate: 6 },
        { limit: 200, rate: 8 },
        { limit: Infinity, rate: 13 }
    ];
    let billAmount = 0;
    let remainingUnits = units;

    for (const slab of slabs) {
        let unitsInSlab = Math.min(remainingUnits, slab.limit);

        billAmount += unitsInSlab * slab.rate;

        remainingUnits -= unitsInSlab;

        if (remainingUnits <= 0) break;
    }
    return billAmount;
}
// Get user input
const units = parseFloat(prompt("Enter the number of units consumed: "));

// Calculate the electricity bill
const billAmount = calculateElectricityBill(units);

// Display the result
console.log(`The electricity bill for ${units} units is: ${billAmount.toFixed(2)}`);


/* 
function calculateElectricityBill(unit) {

    const rates = [4.2, 6, 8, 13];
    const limits = [100, 100, 200];
    
    let bill = 0;

    for (let i = 0; i < limits.length; i++) {
        let used = Math.min(unit, limits[i]);
        bill += used * rates[i];
        unit -= used;
        if (unit <= 0) return bill;
    }

    return bill + unit * rates[3];
}

module.exports = { calculateElectricityBill };
*/