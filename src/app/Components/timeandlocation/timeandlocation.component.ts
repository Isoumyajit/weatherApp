import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimezoneapiserviceService } from 'src/app/Services/timezoneapiservice.service';
import { TimeZone } from 'src/app/Models/Timezone.model';

@Component({
  selector: 'app-timeandlocation',
  templateUrl: './timeandlocation.component.html',
  styleUrls: ['./timeandlocation.component.css'],
})
export class TimeandlocationComponent implements OnInit {
  @Input() city = '';
  @Output() notify: EventEmitter<TimeZone> = new EventEmitter<TimeZone>();
  // ampm: string = 'AM';
  localtime: string = '';
  month: string = '';
  day: string = '';
  year: string = '';
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor(private service: TimezoneapiserviceService) {}
  ngOnInit(): void {
    this.service.getTimeZone(this.city).subscribe({
      next: (res) => {
        this.notify.emit(res);
        this.localtime = res?.location.localtime;
        let timestamp = this.localtime.split(' ');
        let date = timestamp[0];
        this.month = this.monthNames[new Date(date).getMonth()];
        this.localtime = timestamp[1];
        this.day = date.split('-')[2];
        this.year = date.split('-')[0];
        // this.localtime >= '12' ? (this.ampm = 'PM') : (this.ampm = 'AM');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnChanges(): void {
    this.service.getTimeZone(this.city).subscribe({
      next: (res) => {
        this.notify.emit(res);
        this.localtime = res?.location.localtime;
        let timestamp = this.localtime.split(' ');
        let date = timestamp[0];
        this.month = this.monthNames[new Date(date).getMonth()];
        this.localtime = timestamp[1];
        this.day = date.split('-')[2];
        this.year = date.split('-')[0];
        // this.localtime >= '12:00' ? (this.ampm = 'PM') : (this.ampm = 'AM');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
