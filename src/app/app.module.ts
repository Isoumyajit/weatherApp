import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherInfoComponent } from './Components/weather-info/weather-info.component';
import { MapWiseInfoComponent } from './Components/map-wise-info/map-wise-info.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TimeandlocationComponent } from './Components/timeandlocation/timeandlocation.component';
// import { LuxonModule } from 'luxon-angular';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    MapWiseInfoComponent,
    HeaderComponent,
    FooterComponent,
    TimeandlocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
