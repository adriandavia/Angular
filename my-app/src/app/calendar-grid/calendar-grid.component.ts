import { Component } from '@angular/core';
import { CalendarDayComponent } from '../calendar-day/calendar-day.component';

function* getDays(){
  for(let i=0; i<31; i++){
    yield i+1
  }
}

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [CalendarDayComponent],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.scss'
})
export class CalendarGridComponent {
  days = [...getDays()]

  eventHandler(day:number) {
    console.log(day);
  }  
}
