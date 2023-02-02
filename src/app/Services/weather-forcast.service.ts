import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { WeatherData } from '../Models/WeatherModel.model'

@Injectable({
  providedIn: 'root',
})
export class WeatherForcastService {
  constructor(private http: HttpClient) {}
  // getWeatherForcast(lat: number, lon: number): Observable<WeatherData[]> {
  //   return
  // }
}
