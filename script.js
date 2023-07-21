function getWeather() {
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const city = document.getElementById('city').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.log('Error:', error));
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  weatherInfoDiv.innerHTML = '';

  const cityName = data.name;
  const description = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;

  const weatherInfoHTML = `
    <h2>Weather in ${cityName}</h2>
    <p>Description: ${description}</p>
    <p>Temperature: ${temperature} °C</p>
    <p>Humidity: ${humidity}%</p>
  `;

  weatherInfoDiv.innerHTML = weatherInfoHTML;
}
