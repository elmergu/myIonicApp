import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  weather = {};
  public now: Date = new Date();
  
  constructor(private http: HttpClient) { }
  
  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=14.5977959&lon=-90.5037737&units=metric&appid=')
  }

  ngOnInit() {
    this.getWeather().subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

}
