const date1 = new Date();
const year = date1.getFullYear();
const month = date1.getMonth();
const dateToday = date1.getDate();
const day = date1.getDay();
const hour = date1.getHours();
const minute = date1.getMinutes();
const secondsElapsed = date1.getTime();

console.log(`
Todays date is: ${date1},
The year is: ${year},
The month is: ${month},
The date Today is: ${dateToday},
The Day is: ${day},
Current hours: ${hour},
And current minute: ${minute},
And Elapsed seconds are: ${secondsElapsed}
`);