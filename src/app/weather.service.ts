import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'http://api.weatherapi.com/v1/forecast.json?key=f9632dda9bdd4f7381f161839231803&q=london&temp_c&wind_kph&humidity&maxtemp_c&mintemp_c';
 
    
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);
  }
}
