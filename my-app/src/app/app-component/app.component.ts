import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarGridComponent } from '../calendar-grid/calendar-grid.component';
import { elementAt } from 'rxjs';
import { isModuleNamespaceObject } from 'util/types';
import { CalendarDayComponent } from '../calendar-day/calendar-day.component';
import { CounterComponent } from '../counter/counter.component';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarGridComponent, CounterComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Angular"
  user = undefined
  array = [1,2,3,4,5]
  handlerClick(ev:Event) {
    console.log("Hello World!")
  } 
}
