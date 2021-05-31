var cityInputEl = $('#city-input');
var searchButtonEl = $('#search-btn');

function displayWeather() {
var myCity = cityInputEl.val()
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + myCity +"&appid=ca0070b453475207fb1970c743fd65a0"

// connect weather api
fetch(weatherUrl)
.then(function(response){
    return response.json() 
})
.then(function(data){
    console.log (data)
    var cityEl = $("#city")

    var tempEl = $("#temp")

    var windEl = $("#wind")

    var humidityEl = $("#humidity")

    var uvIndexEl = $("#uv")
    var convertedTemp = Math.round(((data.main.temp-273.15)*1.8)+32) 
    tempEl.text("temp: " + convertedTemp+"℉")

    windEl.text("wind: " + data.wind.speed)

    humidityEl.text("humidity: "+ data.main.humidity)

    cityEl.text("city: " + data.name)


})
}

searchButtonEl.on('click', displayWeather)




// // connect 5 day forecast to page (display temp/wind/humidity)
// var cityInputEl = $('#city-input');
// var searchButtonEl = $('#search-btn');

// function displayWeather() {
// var myCity = cityInputEl.val()
// }

// {}

// // when city is inserted it is saved to local storage and also saved to the search history and displayed on the page

