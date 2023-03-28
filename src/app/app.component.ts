import { Component } from '@angular/core';

import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  posts:any=[{}];
  title = 'weatherApp';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
}
}
