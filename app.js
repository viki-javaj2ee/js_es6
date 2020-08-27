import * as ELEMENTS from 'elements.js'

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click',searchWeather)

function searchWeather(){
    const CITY_NAME= ELEMENTS.ELEMENT_SEARCH_CITY.value.trim()

    if (CITY_NAME.length === 0){
        alert('Please enter city name.')
    }

    alert(CITY_NAME)
}