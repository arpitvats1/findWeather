const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa3a1c6914msh97487aee4aa96b6p135cedjsn6b81a5d4693b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Washington', options)
	.then(response => response.json())
	.then((response)=>
	{
		console.log(response)

		wash_cloud.innerHTML=response.cloud_pct
		wash_temp.innerHTML=response.temp
		wash_max.innerHTML=response.max_temp
		wash_min.innerHTML=response.min_temp
		wash_humid.innerHTML=response.humidity
		wash_rise.innerHTML=response.sunrise
		wash_set.innerHTML=response.sunset
		wash_wind.innerHTML=response.wind_speed
		
	})


	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
	.then(response => response.json())
	.then((response)=>
	{
		console.log(response)

		lond_cloud.innerHTML=response.cloud_pct
		lond_temp.innerHTML=response.temp
		lond_max.innerHTML=response.max_temp
		lond_min.innerHTML=response.min_temp
		lond_humid.innerHTML=response.humidity
		lond_rise.innerHTML=response.sunrise
		lond_set.innerHTML=response.sunset
		lond_wind.innerHTML=response.wind_speed
		
	})


	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new delhi', options)
	.then(response => response.json())
	.then((response)=>
	{
		console.log(response)

		delh_cloud.innerHTML=response.cloud_pct
		delh_temp.innerHTML=response.temp
		delh_max.innerHTML=response.max_temp
		delh_min.innerHTML=response.min_temp
		delh_humid.innerHTML=response.humidity
		delh_rise.innerHTML=response.sunrise
		delh_set.innerHTML=response.sunset
		delh_wind.innerHTML=response.wind_speed
		
	})


	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
	.then(response => response.json())
	.then((response)=>
	{
		console.log(response)

		toky_cloud.innerHTML=response.cloud_pct
		toky_temp.innerHTML=response.temp
		toky_max.innerHTML=response.max_temp
		toky_min.innerHTML=response.min_temp
		toky_humid.innerHTML=response.humidity
		toky_rise.innerHTML=response.sunrise
		toky_set.innerHTML=response.sunset
		toky_wind.innerHTML=response.wind_speed
		
	})


	.catch(err => console.error(err));


const getWeather = (city)=> {
	cityName.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response)=>
	{
		console.log(response)

		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		max_temp.innerHTML=response.max_temp
		min_temp.innerHTML=response.min_temp
		humidity.innerHTML=response.humidity
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
		wind_speed.innerHTML=response.wind_speed
		feels_like.innerHTML=response.feels_like
	})


	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")
