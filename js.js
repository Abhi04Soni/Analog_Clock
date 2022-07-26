const hourel = document.querySelector('.hour');
const minuteel = document.querySelector('.minute');
const secondel = document.querySelector('.second');
const timeel = document.querySelector('.time');
const dateel = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }
    else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursforclock = hours % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourel.style.transform = `translate(-50%, -100%) rotate( ${scale(hoursforclock, 0, 11, 0, 360)}deg)`
    minuteel.style.transform = `translate(-50%, -100%) rotate( ${scale(minute, 0, 59, 0, 360)}deg)`
    secondel.style.transform = `translate(-50%, -100%) rotate( ${scale(second, 0, 59, 0, 360)}deg)`

    timeel.innerHTML = `${hoursforclock} : ${minute < 10 ? `0${minute}` : minute} ${ampm}`
    dateel.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

