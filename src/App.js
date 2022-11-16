import './App.css';
import { useState } from 'react';
import CurrentForecast from './components/currentForecast';
import OtheraForecasting from './components/otherForecasting';
import SearchBox from './components/search';
import { WEATHER_API_KEY, WEATHER_API_URL, FORECAST_API_KEY, FORECAST_API_URL } from './api'

function App() {

  const [currentWeather, setcurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${FORECAST_API_URL}lat=${lat}&lon=${lon}&days=${7}&key=${FORECAST_API_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async(response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setcurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forecastResponse})
      })
      .catch((err) => console.log(err))
  }
console.log(currentWeather)


  return (
    <div className=' p-0 m-0' >

      <div className='containerBox absolute w-[100%] h-screen l-0 t-0 p-3 m-0 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-2xl shadow-gray-700 lg:relative lg:max-w-screen-lg lg:mx-auto lg:h-fit lg:my-1'>

        <SearchBox onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentForecast data={currentWeather} />}
        {forecast && <OtheraForecasting data={forecast} />}

      </div>

    </div>
  );
}

export default App;
