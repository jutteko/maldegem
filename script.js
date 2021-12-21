const buitenring = document.getElementById('buitenring');
const temperatuur = document.getElementById('temperatuur');
const datum = document.getElementById('datum');
const tijd = document.getElementById('tijd');

const maldegemUrl =
  'https://api.weather.com/v2/pws/observations/current?stationId=IVLAANDE9&format=json&units=m&numericPrecision=decimal&apiKey=da0ebffb6bc04bc68ebffb6bc00bc63d';

async function getWeatherData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const temp = data.observations[0].metric.temp.toFixed(1);
  const date = ('' + data.observations[0].obsTimeLocal).slice(0, 10).split('-');
  const time = ('' + data.observations[0].obsTimeLocal).substring(11, 16);
  temperatuur.textContent = `${temp}°C`;
  datum.textContent = `${date[2]}-${date[1]}-${date[0]}`;
  tijd.textContent = `${time}`;
}

setInterval(function () {
  getWeatherData(maldegemUrl);
}, 60000);

function setColor(temp) {
  const fixedTemp = temp + 15; // range 0-50
  const percentage = calcPercent(fixedTemp, 50);
  const hue = calcHue(percentage);
  buitenring.style.backgroundColor = `hsl(${hue},100%,50%)`;
}

function calcPercent(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}
function calcHue(perc) {
  return 300 - (300 / 100) * perc;
}
