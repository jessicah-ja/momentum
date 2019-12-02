// navigator라는 APIf를 사용햇 위도와 경도 값을 가져온다.(weather.js도 마찬가지로 저장된 위도, 경도가 있으면 보여줌)
const API_KEY = "108925a4b9557f9331d03237a36ce997";
const weather = document.querySelector('.js-weather');

const COORDS_LS = 'coords'

function getWeather(lat, lng) {
    fetch( //fetch API  Headers, Request, Response
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    }); 
} 

function saveCoords(coordObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); 
}

function loadWeather() {
    const currentCoords = localStorage.getItem(COORDS_LS);
    if(currentCoords) {
        
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    } else {
        askForCoords();
    }
}

function weatherInit() {
    loadWeather();
}

weatherInit();