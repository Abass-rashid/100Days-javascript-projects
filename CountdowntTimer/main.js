const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");

function countBirthday() {
  const birthday = "25 dec 2023";
  const birthdayDate = new Date(birthday);
  const currentDate = new Date();

  const totalSeconds = (birthdayDate - currentDate) / 1000;

  const months = Math.floor(totalSeconds / 3600 / 24 / 30);
  const days = Math.floor(totalSeconds / 3600 / 24) % 30;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  monthEl.textContent = months;
  dayEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minEl.textContent = formatTime(minutes);
  secEl.textContent = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countBirthday();
setInterval(countBirthday, 1000);
