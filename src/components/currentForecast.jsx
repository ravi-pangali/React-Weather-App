import React from 'react'
import moment from 'moment/moment'
import {
  UilTear,
  UilTemperature,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown
} from '@iconscout/react-unicons'
import { timeAndDate } from '../api'

const CurrentForecast = ({data}) => {
  return (
    <div className='my-6 px-16'>
      
      <div className="timeAndLocation  mx-auto text-center text-white mt-4 tracking-widest text-lg font-light ">
        {
          timeAndDate(data.dt, data.timezone)
        }
      </div>

      <div className="cityName capitalize font-bold text-white text-3xl text-center m-4">
        {data.city}
      </div>

      <div className="weatherName capitalize font-light tracking-widest text-center text-cyan-300 m-3 ">
        {data.weather[0].description}
      </div>

      <div className="currentDetails flex">
        <div className="imageOfWeather basis-1/4">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
        </div>

        <div className="highlightedTemprature text-center text-3xl mt-8 text-white basis-1/2">
          {data.main.temp}°C
        </div>

        <div className="humPerWinList basis-1/4 flex flex-col space-y-2 mt-4">

          <div className="humidity text-sm text-white text-start flex">
            <UilTemperature size={19} className="mr-1" />
            Temperature:
            <span className='mx-1'>
              {data.main.temp}°C
            </span>
          </div>

          <div className="humidity text-sm text-white text-start flex">
            <UilTear size={19} className="mr-1" />
            Humidity:
            <span className='mx-1'>
              {data.main.humidity}% 
            </span>
          </div>

          <div className="humidity text-sm text-white text-start flex">
            <UilWind size={19} className="mr-1" />
            Wind:
            <span className='mx-1'>
              {data.wind.speed} km/hr
            </span>
          </div>

        </div>



      </div>
      <div className="todayForecast flex flex-row">

        <p className="rise text-center text-white mx-auto mt-5 text-md flex flex-row">
          <UilSun className="mx-1 " />
          Rise:
          <span className='font-medium mx-2'>{moment(data.sys.sunrise * 1000).format('HH:mm')} AM</span>
        </p>

        <p className="set text-center text-white mx-auto mt-5 text-md flex flex-row">
          <UilSunset className="mx-1 " />
          Set:
          <span className='font-medium mx-2'>{moment(data.sys.sunset * 1000).format('HH:mm')} PM</span>
        </p>

        <p className="high text-center text-white mx-auto mt-5 text-md flex flex-row">
          <UilArrowUp className="mx-1 " />
          High:
          <span className='font-medium mx-2'>
            {data.main.temp_max}°
          </span>
        </p>

        <p className="low text-center text-white mx-auto mt-5 text-md flex flex-row">
          <UilArrowDown className="mx-1 " />
          Low:
          <span className='font-medium mx-2'>
            {data.main.temp_min}°
          </span>
        </p>

      </div>


    </div>
  )
}

export default CurrentForecast
