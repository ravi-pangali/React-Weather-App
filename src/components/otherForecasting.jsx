import React from 'react'

const OtheraForecasting = ({ data }) => {
  return (
    <>
      <div className='text-white px-4 text-sm mt-5 lg:px-20'>

        <div className="forecastingTitle font-semibold">
          WEEKLY FORECAST
          <hr className='my-2' />
        </div>

        <div className="contentOfForecasting lg:my-5 justify-center flex space-x-10 lg:space-x-32">

          <div className="flex flex-col items-center">
            <p className='time'>SUN</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[0].temp}°</p>
          </div>

          <div className="flex flex-col items-center">
            <p className='time'>MON</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[1].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[1].temp}°</p>
          </div>

          <div className="flex flex-col items-center">
            <p className='time'>TUE</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[2].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[2].temp}°</p>
          </div>
        </div>


        <div className="contentOfForecasting lg:my-5 mx-2 justify-center flex space-x-10 lg:space-x-32">
          <div className="flex flex-col items-center">
            <p className='time'>WED</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[3].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[3].temp}°</p>
          </div>

          <div className="flex flex-col items-center">
            <p className='time'>THU</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[4].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[4].temp}°</p>
          </div>

          <div className="flex flex-col items-center">
            <p className='time'>FRI</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[5].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[5].temp}°</p>
          </div>

          <div className="flex flex-col items-center">
            <p className='time'>SAT</p>
            <img className='w-5 lg:w-12' src={`https://www.weatherbit.io/static/img/icons/${data.data[6].weather.icon}.png`} alt="" />
            <p className='Temprature font-semibold'>{data.data[6].temp}°</p>
          </div>

        </div>
      </div></>
  )
}

export default OtheraForecasting
