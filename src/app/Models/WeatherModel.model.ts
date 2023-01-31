/* A TypeScript interface. */
// export interface WeatherData {
//   cloud_pct: number
//   temp: number
//   feels_like: number
//   humidity: number
//   min_temp: number
//   max_temp: number
//   wind_speed: number
//   wind_degrees: number
//   sunrise: number
//   sunset: number
// }

/* Defining the structure of the data that is returned from the API. */
export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
