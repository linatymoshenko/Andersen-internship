const DEFAULT_COUNTRY = "Украина";
const API_KEY = "1914cd5f635de9246955aa90978ff6e8";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_IMAGE_URL = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";


function sendRequest(country = DEFAULT_COUNTRY) {
  const url = `${API_URL}?q=${country}&units=metric&appid=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json());
}

function getWeatherForCountry() {
  let country = document.getElementsByClassName("search-country")[0].value;

  sendRequest(country)
    .then(({main: {temp}, weather: [{icon, description}]}) => {
      document.getElementById("country").innerHTML = country;
      document.getElementById("temperature").innerHTML = temp;
      let imageBlock = document.getElementById("image-block");

      while (imageBlock.firstChild) {
        imageBlock.removeChild(imageBlock.firstChild);
      }

      let weatherImage = document.createElement("IMG");
      weatherImage.src = `${API_IMAGE_URL}${icon}.png`;
      weatherImage.alt = description;
      imageBlock.appendChild(weatherImage);
    })
    .catch(error => {
        alert(error);
      });
}
