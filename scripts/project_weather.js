let info = {
    latitude: 40.75657,
    longitude: 	-111.8930
}

let weatherData;

function buildWeatherUrl(){
    return `https://api.open-meteo.com/v1/forecast?latitude=${info.latitude}&longitude=${info.longitude}&current=temperature_2m,cloud_cover,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1`
}


function updateElements(){
    let weather = document.querySelector("#weather");
    weather.innerHTML = `
    Temprature: ${weatherData.current.temperature_2m} ${weatherData.current_units.temperature_2m}<br>
    Wind Speed: ${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}<br>
    Clould Cover: ${weatherData.current.cloud_cover} ${weatherData.current_units.cloud_cover}
    </p>`;
}

async function getWeather(){
    let response = await fetch(buildWeatherUrl());

    if(response.ok){
        weatherData = await response.json();
        //console.log(weatherData);
        updateElements();
    }
}

function updateInfo(){
    info.latitude = document.querySelector("#Latitude").value;
    info.longitude = document.querySelector("#Longitude").value;

    localStorage.setItem("weatherInfo", JSON.stringify(info));
    getWeather(buildWeatherUrl());

}


if(localStorage.getItem("weatherInfo") !== null){
    info = JSON.parse(localStorage.getItem("weatherInfo"));
}

getWeather(buildWeatherUrl());
document.querySelector("#updateWeather").addEventListener("click", updateInfo)