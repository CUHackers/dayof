import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import * as saturday from './Saturday.json';
import * as sunday from './Sunday.json';
import * as prizes from './Prizes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  timetohackathon = moment.duration(moment().diff(moment("January 24, 2020"))).humanize()
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
