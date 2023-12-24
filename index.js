async function showWeather(){

place= PlaceName.value

    PlaceName.value=""



    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+place;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e156a8af2mshea067c7e726b6fdp1f4cd0jsna4ebcc6da7dd',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        Name.innerHTML =place
        temp.innerHTML= "TEMPRATURE: "+ result.temp + "°C"
        humid.innerHTML= "HUMIDITY: "+ result.humidity + "%"
        feels.innerHTML= "FEELS LIKE: "+ result.feels_like + "°C"
        speed.innerHTML ="WIND SPEED: " +result.wind_speed

    } catch (error) {
        console.error(error);
    }
}


