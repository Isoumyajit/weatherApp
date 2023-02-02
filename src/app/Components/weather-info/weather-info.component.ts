import { Weather } from './../../Models/WeatherModel.model'
import { Component, OnInit } from '@angular/core'
import { WeatherData } from 'src/app/Models/WeatherModel.model'
import { WeatherServicesService } from 'src/app/Services/weather-services.service'

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  city: string = 'Kolkata'
  weatherInfo: WeatherData | undefined
  weatherDes: string = ''
  icon: string = ''
  iconurl: string = ''
  constructor(private service: WeatherServicesService) {}
  ngOnInit(): void {
    this.service.getWeatherData(this.city).subscribe({
      next: (res) => {
        this.weatherInfo = res
        this.weatherDes = this.weatherInfo?.weather[0].main
        this.iconurl =
          'http://openweathermap.org/img/w/' +
          this.weatherInfo?.weather[0].icon +
          '.png'
        console.log(this.iconurl)
      },
    })
  }
  fetchData() {
    this.service.getWeatherData(this.city).subscribe({
      next: (res) => {
        console.log(res)
        this.weatherInfo = res
        this.weatherDes = this.weatherInfo?.weather[0].main
      },
    })
  }
}
