import { Component, HostListener } from '@angular/core';
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
  /*
    El hostListener se pone aquí porque es donde se tratan los datos
  */
  @HostListener('click', ["$event"])
  monstrarDia(event:Event) {
    //Cortocircuito 
    const node = (event.composedPath() as HTMLElement[]).find(n=>n.dataset && 'day' in n.dataset);
    node && console.log(node.dataset['day']);
    /*
      PROS: 
        - Mayor rendimiento
      CONTRAS:
        - Mayor dificultad
        - Solo se van a serializar en los data-* cadenas -> Si quieres otro tipo, haz un cast
          - obj->json (no recomendado)
    */
  } 
}
