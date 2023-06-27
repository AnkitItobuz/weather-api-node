const inputValue = document.getElementById("Enter-any-location");
const locationHead = document.querySelector("#location-head");
const weatherImage = document.querySelector("#weather-img");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");

let inputTextValue = "hi";

inputValue.addEventListener("keyup", (e) => {
  inputTextValue = e.target.value;
  if (e.key === "Enter" && inputValue.value !== "") {
    getData();
  }
});

let res = {
  success: true,
};
let data;

async function getData() {
  try {
    data = await fetch(`http://localhost:3400/${inputTextValue}`).then((data) =>
      data.json()
    );
  } catch (e) {
    console.log("error");
    res.success = false;
  } finally {
    if (res.success === true) {
      locationHead.innerHTML =
        inputTextValue.charAt(0).toUpperCase() +
        inputTextValue.slice(1).toLowerCase();
      temperature.innerHTML = data.data.temp_c + "<sup>o</sup>";
      feelsLike.innerHTML = "Feels " + data.data.feelslike_c + "<sup>o</sup>";
      weatherImage.style.display = "block";
      if (data.data.temp_c < 15) {
        weatherImage.src = "../backend/images/cloudThunder.png";
      } else if (data.data.temp_c > 15 && data.data.temp_c < 30) {
        document.getElementById("weather-img").src =
          "../backend/images/rainyWeather.webp";
      } else {
        document.getElementById("weather-img").src =
          "../backend/images/sunnyWeather.png";
      }

      document.querySelector(".hide").style.display = "block";
    } else {
      locationHead.innerHTML = inputTextValue;
      weatherImage.style.display = "block";
      document.getElementById("weather-img").src =
        "../backend/images/cloud.png";
      temperature.innerHTML = "No Data Found";
      feelsLike.innerHTML = "";
      document.querySelector(".hide").style.display = "none";
    }
  }
  inputValue.value = "";
}
