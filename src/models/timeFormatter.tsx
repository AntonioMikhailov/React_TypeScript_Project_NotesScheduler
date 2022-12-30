// форматируем время
let time = new Date();  
console.log(time)
let formatter = new Intl.DateTimeFormat("ru", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: 'numeric',
 minute: 'numeric',
 second: 'numeric',
});


export const setTime  = formatter.format(time)
console.log(setTime);