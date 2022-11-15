import { DateTime } from "luxon";

// Current Weather
export const geoApiOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48dd95a898mshf72f8af87f76896p1d3ab7jsn20e26e48d7f3',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"
export const WEATHER_API_KEY = '5e0e8393d9af5b953023f69af3ddf3bb'
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/'
export const FORECAST_API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?'
export const FORECAST_API_KEY = 'f0c789d12bda46b09da98a7965e2dbae'


export const timeAndDate = (
	sec,
	zone,
	format = "cccc, dd LLL yyyy' | Local Time: 'HH:mm a"
) => DateTime.fromSeconds(sec).setZone(zone).toFormat(format)