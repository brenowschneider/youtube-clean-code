//Write a function that return the month name based on the month number
// 0 -> January
// 2 -> March
// 11 -> December
// Any invalid number should return an empty string

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function isMonthNumberValid(monthNumber: number) {
    return monthNumber >= 0 && monthNumber <= 11
}

function mapMonthNumberToMonthName(monthNumber: number) {

    if (!isMonthNumberValid(monthNumber)) {
        console.error(`Month number '${monthNumber}' is not valid. Please provide a number from 0 to 11.`)
        return '';
    }

    return months[monthNumber];

}

console.log(mapMonthNumberToMonthName(0));
console.log(mapMonthNumberToMonthName(3));
console.log(mapMonthNumberToMonthName(11));
console.log(mapMonthNumberToMonthName(47));

