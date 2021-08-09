//Write a function that returns the month name based on the month number
// 0 -> January
// 2 -> March
// 11 -> December
// Any invalid number should return an empty string

function numberToMonth(n: number) {

    // result returned at the end
    let res;

    if (n === 0) {
        res = 'January'
    } else if (n === 1) {
        res = 'February';

    } else if (n === 2) {
        res = 'March';

    } else if (n === 3) {
        res = 'April';

    } else if (n === 4) {
        res = 'May';

    } else if (n === 5) {
        res = 'June';

    } else if (n === 6) {
        res = 'July';

    } else if (n === 7) {
        res = 'August';

    } else if (n === 8) {
        res = 'September';

    } else if (n === 9) {
        res = 'October';

    } else if (n === 10) {
        res = 'November';

    } else if (n === 11) {
        res = 'December';

    } else {
        // Not a valid month. Returning empty...
        res = ''
    }

    return res;
}

console.log(numberToMonth(0));
console.log(numberToMonth(3));
console.log(numberToMonth(11));
console.log(numberToMonth(47));
console.log(numberToMonth(8));
