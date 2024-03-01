import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarGridComponent } from '../calendar-grid/calendar-grid.component';
import { CounterComponent } from '../counter/counter.component';
import { TimerComponent } from '../timer/timer.component';
import { BService } from '../serviceB/service-b.service';
import { CustomerComponent } from '../customer/customer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CalendarGridComponent, 
    CounterComponent, 
    TimerComponent,
    CustomerComponent],
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
  constructor(private serviceB:BService){}
}
