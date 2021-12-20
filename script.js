const maldegemUrl =
  'https://api.weather.com/v2/pws/observations/current?stationId=IVLAANDE9&format=json&units=m&numericPrecision=decimal&apiKey=614f3b49212d45db8f3b49212d65db6e';

async function getWeatherData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.observations[0].metric.temp);
}

getWeatherData(maldegemUrl);
