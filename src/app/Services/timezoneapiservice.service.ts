import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeZone } from '../Models/Timezone.model';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TimezoneapiserviceService {
  constructor(private http: HttpClient) {}
  getTimeZone(city: string): Observable<TimeZone> {
    return this.http.get<TimeZone>(environment.timezoneUrl, {
      headers: {
        'X-RapidAPI-Key': environment.X_RapidAPI,
        'X-RapidAPI-Host': environment.X_RapidAPIHost,
      },
      params: new HttpParams().set('q', city),
    });
  }
}
