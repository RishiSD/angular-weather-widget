import { Injectable } from '@angular/core'; 

@Injectable() 
export class Constants {
    public readonly API_ENDPOINT: string = ' https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=6cdf30431bb0b9d238240b66deddf5fb';
    public readonly TitleOfSite: string = " Weather Card";
    public readonly City: string = " Berlin"; 
} 