async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("result");

  if (!location) {
    resultDiv.innerText = "Please enter a location.";
    return;
  }

  const apiKey = "9f6bca52c04648e6bb1160858252206";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      resultDiv.innerText = `Error: ${data.error.message}`;
    } else {
      const temp = data.current.temp_c;
      resultDiv.innerText = `The current temperature in ${data.location.name} is ${temp}°C.`;
    }
  } catch (error) {
    resultDiv.innerText = "Failed to fetch weather data.";
  }
}
