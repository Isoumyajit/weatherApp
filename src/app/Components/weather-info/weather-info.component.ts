import { Weather } from './../../Models/WeatherModel.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeZone } from 'src/app/Models/Timezone.model';
import { WeatherData } from 'src/app/Models/WeatherModel.model';
import { WeatherServicesService } from 'src/app/Services/weather-services.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  city: string = 'Kolkata';
  weatherInfo: WeatherData | undefined;
  weatherDes: string = '';
  icon: string = '';
  iconurl: string = '';
  type: boolean = true;
  timezone: TimeZone | undefined;
  quickSearch: any = [
    {
      id: 1,
      city: 'Kolkata',
    },
    {
      id: 2,
      city: 'Mumbai',
    },
    {
      id: 3,
      city: 'Delhi',
    },
    {
      id: 4,
      city: 'Istanbul',
    },
    {
      id: 5,
      city: 'Shanghai',
    },
    {
      id: 6,
      city: 'New York',
    },
    {
      id: 7,
      city: 'London',
    },
  ];
  constructor(private service: WeatherServicesService) {}
  ngOnInit(): void {
    this.service.getWeatherData(this.city).subscribe({
      next: (res) => {
        this.weatherInfo = res;
        this.weatherDes = this.weatherInfo?.weather[0].main;
        this.iconurl =
          'http://openweathermap.org/img/w/' +
          this.weatherInfo?.weather[0].icon +
          '.png';
      },
    });
  }
  fetchData(props: string = this.city, type: string = 'C') {
    if (type !== 'C') this.type = false;
    else this.type = true;
    this.service.getWeatherData(props, type).subscribe({
      next: (res) => {
        this.city = props.indexOf(',') ? props.split(',')[0] : props;
        console.log(this.city);

        this.weatherInfo = res;
        this.weatherDes = this.weatherInfo?.weather[0].main;
        this.iconurl =
          'http://openweathermap.org/img/w/' +
          this.weatherInfo?.weather[0].icon +
          '.png';
      },
    });
  }

  formatBackgroundColor() {
    if (this.weatherInfo?.weather[0].main === 'Clear') {
      return 'bg-gradient-to-bt from-cyan-500 to-gray-100';
    } else if (this.weatherInfo?.weather[0].main === 'Hot')
      return 'bg-gradient-to-br from-orange-500 to-gray-100';
    else if (
      this.weatherInfo?.weather[0].main === 'Rain' ||
      this.weatherInfo?.weather[0].main === 'Clouds'
    ) {
      return 'bg-gradient-to-br from-gray-500 to-gray-50';
    } else if (this.weatherInfo?.weather[0].main === 'Haze') {
      return 'bg-gradient-to-br from-gray-200 to-white';
    } else return 'bg-gradient-to-br from-gray-100 to-white';
  }
  getDataFromChild(childData: TimeZone) {
    this.timezone = childData;
  }
}
