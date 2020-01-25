import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as saturday from './Saturday.json';
import * as sunday from './Sunday.json';
import * as prizes from './Prizes.json';

import 'moment-duration-format';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  // timetohackathon = moment.duration(moment().diff(moment("2020-01-25 10:00:00").add(0,"days"))).format("hh:mm:ss");

  timetohackathon = moment() < moment("2020-01-25 10:00:00") ?
    moment.duration(moment("2020-01-25 10:00:00").diff(moment())).format("h [Hours]:mm [Minutes]") : 
    moment.duration(moment("2020-01-26 10:00:00").diff(moment())).format("h [Hours]:mm [Minutes]");

  saturday = (saturday as any).default;
  sunday = (sunday as any).default;
  prizes = (prizes as any).default;

  ngOnInit() {
    for (let i = 9; i <= 21; i+=2) {
      let t:string;
      if ( i > 11)
        t = (i - 12) + ":00 PM"
      else
        t = i + ":00 AM"
      this.clock.push(t);
    }
  }

  public greaterThan(i: number, num: number) {
    return i < num;
  }

  clock = []
}
