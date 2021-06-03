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

    cityEl.text(data.name)

    // this part is where we start the five-day forecast
    var weatherUrlFiveDays = "https://api.openweathermap.org/data/2.5/forecast?q=" + myCity +"&appid=ca0070b453475207fb1970c743fd65a0"
   
    fetch(weatherUrlFiveDays)
    .then(function(response){
        return response.json() 
    })
    .then(function(data){
        console.log (data)

        var day1TempEl = $("#day-1-t");
        var day2TempEl = $("#day-2-t");
        var day3TempEl = $("#day-3-t");
        var day4TempEl = $("#day-4-t");
        var day5TempEl = $("#day-5-t");


        var convertedTemp1 = Math.round(((data.list[0].main.temp-273.15)*1.8)+32) 
        day1TempEl.text("temp: " + convertedTemp1+"℉")

        var convertedTemp2= Math.round(((data.list[9].main.temp-273.15)*1.8)+32) 
        day2TempEl.text("temp: " + convertedTemp2+"℉")

        var convertedTemp3 = Math.round(((data.list[19].main.temp-273.15)*1.8)+32) 
        day3TempEl.text("temp: " + convertedTemp3+"℉")

        var convertedTemp4 = Math.round(((data.list[29].main.temp-273.15)*1.8)+32) 
        day4TempEl.text("temp: " + convertedTemp4+"℉")

        var convertedTemp5 = Math.round(((data.list[38].main.temp-273.15)*1.8)+32) 
        day5TempEl.text("temp: " + convertedTemp5+"℉")


        var day1WindEl = $("#day-1-w");
        var day2WindEl = $("#day-2-w");
        var day3WindEl = $("#day-3-w");
        var day4WindEl = $("#day-4-w");
        var day5WindEl = $("#day-5-w");

        day1WindEl.text("wind: " + data.list[0].wind.speed)
        day2WindEl.text("wind: " + data.list[9].wind.speed)
        day3WindEl.text("wind: " + data.list[19].wind.speed)
        day4WindEl.text("wind: " + data.list[29].wind.speed)
        day5WindEl.text("wind: " + data.list[38].wind.speed)



        var day1HumidityEl = $("#day-1-h");
        var day2HumidityEl = $("#day-2-h");
        var day3HumidityEl = $("#day-3-h");
        var day4HumidityEl = $("#day-4-h");
        var day5HumidityEl = $("#day-5-h");

        day1HumidityEl.text("humidity: "+ data.list[0].main.humidity+"%")
        day2HumidityEl.text("humidity: "+ data.list[9].main.humidity+"%")
        day3HumidityEl.text("humidity: "+ data.list[19].main.humidity+"%")
        day4HumidityEl.text("humidity: "+ data.list[29].main.humidity+"%")
        day5HumidityEl.text("humidity: "+ data.list[38].main.humidity+"%")






    })

})
}

searchButtonEl.on('click', displayWeather)







