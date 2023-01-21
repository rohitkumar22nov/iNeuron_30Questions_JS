// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

const dateToday = new Date();
const year = dateToday.getFullYear();
const month = dateToday.getMonth();
const date = dateToday.getDate();
const hours = dateToday.getHours();
const min = dateToday.getMinutes();

const monthArray = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

console.log("// - YYYY-MM-DD HH:mm");
console.log(`
${year}-${monthArray[month]}-${date} ${hours}:${min}
`);

console.log("// - DD-MM-YYYY HH:mm");

console.log(`
${date}-${monthArray[month]}-${year} ${hours}:${min}
`);

