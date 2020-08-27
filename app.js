import * as ELEMENTS from 'elements.js'
import {Http} from 'http.js'
import {WeatherData,WEATHER_PROXY_HANDLER} from 'weather-data.js'

const APP_ID = '9e40326d4437c734a698b17499837faf'

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click',searchWeather)

function searchWeather(){
    const CITY_NAME= ELEMENTS.ELEMENT_SEARCH_CITY.value.trim()

    if (CITY_NAME.length === 0){
        alert('Please enter city name.')
    }

    const URL = 'http://api.openweathermap.org/data/2.5/weather?q='+CITY_NAME+'&appid='+APP_ID

    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DTA = new WeatherData(CITY_NAME,responseData.weather[0].description.toUpperCase())
            const WEATHER_PROXY = new Proxy(WEATHER_DTA,WEATHER_PROXY_HANDLER)
            WEATHER_PROXY.temperature = responseData.main.temp
            updateWeather(WEATHER_PROXY)
        })
        .catch(error => alert(error))
}

function updateWeather(weatherData){
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature

    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block'
}