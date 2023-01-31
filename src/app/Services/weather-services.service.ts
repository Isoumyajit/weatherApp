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
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHost, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKey, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('q', city)
        .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
        .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
        .set('units', 'metric'),
    })
  }
}
