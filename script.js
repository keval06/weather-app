const apiKey = "b6e62b44d21bc0765f49549108e9b4cb";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//3. select input box and input
const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
//1. write changeWeather fun with 1. city in url

async function changeWeather(cityName) {
  let response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  //5. Error msg
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    //2. update the code
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/images/mist.png";
    }
    // else if(data.weather[0].main == "Cold"){
    //     weatherIcon.src = "images/cold.png"
    // }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    searchBox.value = ""; // Clear the input box after search
  }
}

//4.. add event listener to search icon
searchBox.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
      changeWeather(searchBox.value);
    //   searchBox.value = "";
  }
});
searchBtn.addEventListener("click", function () {
  changeWeather(searchBox.value);
});

// changeWeather();
