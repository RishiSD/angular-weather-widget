import { environment } from './../environments/environment.prod';
import { Constants } from './config/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.TitleOfSite;
}
