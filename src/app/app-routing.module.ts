import { AppComponent } from './app.component'
import { MapWiseInfoComponent } from './Components/map-wise-info/map-wise-info.component'
import { WeatherInfoComponent } from './Components/weather-info/weather-info.component'
import { NgModule, Component } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    component: WeatherInfoComponent,
    path: 'currentweather',
  },
  {
    component: MapWiseInfoComponent,
    path: 'mapvisuals',
  },
  {
    component: WeatherInfoComponent,
    path: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
