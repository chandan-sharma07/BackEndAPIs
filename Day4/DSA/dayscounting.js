//Counting the number of days in given month of the year
const prompt = require("prompt-sync")();
// Function to count the number of days in a given month and year
function countDays(month, year) {
    const monthDays = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays[month - 1];
}
// Function to check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
// Get user input
const month = parseInt(prompt("Enter the month (1-12): "));
const year = parseInt(prompt("Enter the year: "));  
// Validate month input
if (month < 1 || month > 12) {
    console.log("Invalid month. Please enter a value between 1 and 12.");
} else {
    // Count the number of days and display the result
    const days = countDays(month, year);
    console.log(`The number of days in month ${month} of year ${year} is: ${days}`);
}
