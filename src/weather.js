const place = document.querySelector(".header-column-place"),
  temperature = document.querySelector(".header-column-temperature");

const COORDS = "coords";
const WEATHER_API_KEY = "e852ccc9c55ffe68b717224049771fd3";

function getWeather({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const currentTemperature = json.main.temp;
      const currentPlace = json.name;
      temperature.innerText = `${currentTemperature}`;
      place.innerText = `${currentPlace}`;
    });
}

function saveCoordsOBJ(obj) {
  localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoError() {
  alert("위치 확인 불가");
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsOBJ = {
    latitude,
    longitude,
  };
  saveCoordsOBJ(coordsOBJ);
  getWeather({
    latitude,
    longitude,
  });
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedcoords = localStorage.getItem(COORDS);
  if (loadedcoords === null) {
    askCoords();
  } else {
    const parsedCoords = JSON.parse(loadedcoords);
    getWeather({
      latitude: parsedCoords.latitude,
      longitude: parsedCoords.longitude,
    });
  }
}
loadCoords();
