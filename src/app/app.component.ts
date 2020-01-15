import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  timetohackathon = moment.duration(moment().diff(moment("January 22, 2020"))).humanize()
}
