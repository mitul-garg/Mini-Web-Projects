const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const giveaway_h4 = document.querySelector(".giveaway");
const deadline_div = document.querySelector(".deadline");
const items_h4 = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021,7,20,15,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway_h4.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const diff = futureTime - today;
    
    // values in milliseconds
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // remaining time
    let days = Math.floor(diff/oneDay);
    let hours = Math.floor((diff % oneDay) / oneHour);
    let minutes = Math.floor((diff % oneHour) / oneMinute);
    let seconds = Math.floor((diff % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10)
            return `0${item}`;
        return item;
    }
    
    items_h4.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    })

    if (diff < 0) {
        clearInterval(countdown);
        deadline_div.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();