let loc = document.getElementById("locations")
let tempIcon = document.getElementById("temp-icon")
let tempVal = document.getElementById("temp-value")
let climate = document.getElementById("climate")
let iconFile;


window.addEventListener("load" , () => {
    let long;
    let lat;
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long  = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7db47e4cb8f7c6f357e3feb32401e853`;
            fetch(api)
                .then((respnse)=>{
                    return respnse.json();
                })

                .then(data => {
                    const {name} = data;
                    const {feels_like} = data.main;
                    const {id, main} = data.weather[0]

                    loc.textContent = name;
                    climate.textContent = main;
                    tempVal.textContent = Math.round(feels_like - 273);

                    console.log(data);
                })
        })
    }
})