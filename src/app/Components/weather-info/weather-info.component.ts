import { Component, OnInit } from '@angular/core'
import { WeatherServicesService } from 'src/app/Services/weather-services.service'

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  city: string = ''
  constructor(private service: WeatherServicesService) {}

  ngOnInit(): void {
    this.service.getWeatherData('kolkata').subscribe({
      next: (res) => {
        console.log(res)
      },
    })
  }
  fetchData() {
    this.service.getWeatherData(this.city).subscribe({
      next: (res) => {
        console.log(res)
      },
    })
  }
}
