import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export class WeatherData {
    public temp!: string;
    public humidity!: string;
    public weather!: string;
    public isDay!: boolean;
    public isError: boolean = true;
}

@Injectable()   
export class WeatherDataService {

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getWeatherData(): WeatherData {

        var apiData = new WeatherData();
        var wData: any;
        
        let response = this.http.get(environment.API_ENDPOINT).pipe(catchError(this.handleError));
        
        response.subscribe( data => {
            wData = data
            apiData.temp = wData.main.temp
            apiData.humidity = wData.main.humidity
            apiData.weather = wData.weather[0].main
            let sunset = new Date(wData.sys.sunset * 1000);
            let sunrise = new Date(wData.sys.sunrise * 1000);
            let currentDate = new Date();
            if (currentDate.getTime() < sunrise.getTime() || currentDate.getTime() > sunset.getTime()) {
                apiData.isDay = false
            }
            else {
                apiData.isDay = true
            }
            apiData.isError = false
        });
        console.log(apiData)
        return apiData
    }
}