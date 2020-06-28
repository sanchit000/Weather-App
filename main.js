//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

//https://api.openweathermap.org/data/2.5/weather?q={'Delhi'}&appid={'a90424e31815b1be708afea2e96cb056'}

//http://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=a90424e31815b1be708afea2e96cb056
const api={
  key: "a90424e31815b1be708afea2e96cb056",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchInputBox=document.getElementById('input-box');

//Event Listener Function on keypress
searchInputBox.addEventListener('keypress',(event) => {

   if(event.keyCode == 13) {
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
      document.querySelector(`.weather-body`).style.display="block";
    }
});


//Get Weather Report

function getWeatherReport(city)
{

  fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(showWeatherReport);

}

//Show Weather Report
function showWeatherReport(weather) {
     console.log(weather);
     let city=document.getElementById(`city`);
     city.innerText=`${weather.name},${weather.sys.country}`;

     let temperature=document.getElementById(`temp`);
     temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

     let minMaxTemp=document.getElementById(`min-max`);
     minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

     let weatherType=document.getElementById(`weather`);
     weatherType.innerText=`${weather.weather[0].main}`;

     let date=document.getElementById(`date`);
     let todayDate=new Date();
     date.innerText=dateManage(todayDate);

     

}
//Date Manage

function dateManage(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${day} ${year}`;

}