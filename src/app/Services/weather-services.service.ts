import { WeatherData } from './../Models/WeatherModel.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WeatherServicesService {
  constructor(private http: HttpClient) {}
  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.baseUrl, {
      params: new HttpParams()
        .set('q', city)
        .set(environment.appId, environment.appIdValue)
        .set('units', 'metric'),
    })
  }
}
