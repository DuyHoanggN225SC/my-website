var clockInterval = null;
var onlineText = 'You need offline to watch content';
var clockTemplate = `
  <h3 class="title">A Offline Website</h3>
  <div id="clocktext" class="clock"></div>
  <div id="datetext" class="date"></div>
`;

function runClock() {
  const clockElement = document.querySelector('#clocktext');
  const dateElement = document.querySelector('#datetext');
  clockInterval = setInterval(function() {
    const date = new Date();
    const dateTimeFormat = date.toLocaleDateString('vi-VN',
      {
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        day: 'numeric', month: 'numeric', year: 'numeric'
      }
    ).split(', ');
    clockElement.innerHTML = dateTimeFormat[0];
    dateElement.innerHTML = dateTimeFormat[1];
  }, 1000);
}

function online() {
  document.querySelector('.main').innerHTML = onlineText;
}

function offline() {
  document.querySelector('.main').innerHTML = clockTemplate;
  runClock();
}

if (navigator.onLine) online();
else offline();

window.ononline = online;

window.onoffline = offline;
