import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { environment } from './../../../environments/environment';
import { WeatherData, WeatherDataService } from '../../services/weather-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  Data: WeatherData;
  City = environment.City;
  readonly THUNDERSTORM = 'Thunderstorm';
  readonly DRIZZLE = 'Drizzle';
  readonly RAIN = 'Rain';
  readonly SNOW = 'Snow';
  readonly CLEAR = 'Clear';
  readonly CLOUDS = 'Clouds';

  constructor(private service: WeatherDataService, private sanitizer: DomSanitizer) {
    this.Data = service.getWeatherData();
  }
}
