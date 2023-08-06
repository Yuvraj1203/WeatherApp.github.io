const apiKey = "c3a7e891eecb1abfa2803db1ac3445a6";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weathericon = document.getElementsByClassName(".sky");
var txt = document.querySelector(".txt");
let btn = document.querySelector(".btn");
var sky = document.querySelector(".sky");

const mainFunc = async(city)=>{

    let response = await fetch(api+city+`&appid=${apiKey}`);
    

    if(response.status == 404){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".content").style.display = "none";
    }else{

        let data = await response.json();
        console.log(data)
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"; 

        if(data.weather[0].main == "Clouds"){
        sky.innerHTML = `<img src="images/Clouds.png">`
        }
        else if(data.weather[0].main == "Clear"){
        sky.innerHTML = `<img src="images/Clear.png">`
        }
        else if(data.weather[0].main == "Rain"){
        sky.innerHTML = `<img src="images/Rain.png">`
        }
        else if(data.weather[0].main == "Drizzle"){
        sky.innerHTML = `<img src="images/Drizzle.png">`
        }
        else if(data.weather[0].main == "Mist"){
        sky.innerHTML = `<img src="images/Mist.png">`
        }
        else if(data.weather[0].main == "Snow"){
        sky.innerHTML = `<img src="images/Snow.png">`
        }
        else if(data.weather[0].main == "Haze"){
        sky.innerHTML = `<img src="images/Mist.png">`
        }
        else{
        sky.innerHTML = `<img src="images/Clear.png">`
        }

        document.querySelector(".content").style.display = "block";
        document.querySelector(".err").style.display = "none";
}}

btn.addEventListener('click',()=>{
   return mainFunc(txt.value);
})