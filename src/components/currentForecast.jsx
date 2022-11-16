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
    <div className='my-3 px-8 flex flex-col '>
      
      <div className="timeAndLocation text-center text-white mt-2 tracking-widest text-sm lg:text-lg lg:mt-3 font-light ">
        {
          timeAndDate(data.dt, data.timezone)
        }
      </div>

      <div className="cityName capitalize font-bold text-white text-lg text-center mt-3 lg:text-3xl lg:mt-4">
        {data.city}
      </div>

      <div className="weatherName text-sm capitalize font-light tracking-widest text-center text-cyan-300 lg:text-lg lg:mt-2">
        {data.weather[0].description}
      </div>

      <div className="currentDetails flex flex-col lg:flex-row lg:space-x-[14rem]  items-center">
        <div className="imageOfWeather flex justify-center">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
        </div>

        <div className="highlightedTemprature text-center text-xl lg:pl-20  lg:text-3xl text-white">
          {data.main.temp}°C
        </div>

        
        <div className="humPerWinList flex flex-col space-y-2 my-4">

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
        <hr className='mt-1 lg:hidden' />
      <div className="todayForecast mt-2 flex flex-col lg:flex-row justify-start items-start">

        <div className="rise lg:mx-auto text-start text-white text-sm flex flex-row">
          <UilSun className="mx-1 " />
          Rise:
          <span className='font-medium mx-2'>{moment(data.sys.sunrise * 1000).format('HH:mm')} AM</span>
        </div>

        <div className="set lg:mx-auto text-start text-white  text-sm flex flex-row">
          <UilSunset className="mx-1 " />
          Set:
          <span className='font-medium mx-2'>{moment(data.sys.sunset * 1000).format('HH:mm')} PM</span>
        </div>

        <div className="high lg:mx-auto text-start text-white text-sm flex flex-row">
          <UilArrowUp className="mx-1 " />
          High:
          <span className='font-medium mx-2'>
            {data.main.temp_max}°
          </span>
        </div>

        <div className="low lg:mx-auto text-start text-white text-sm flex flex-row">
          <UilArrowDown className="mx-1 " />
          Low:
          <span className='font-medium mx-2'>
            {data.main.temp_min}°
          </span>
        </div>

      </div>


    </div>
  )
}

export default CurrentForecast
