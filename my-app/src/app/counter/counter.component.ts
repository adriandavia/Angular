import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = signal(0);
  
  @HostListener('click', ["$event"])
  actualizarContador(event:Event) {
    this.count.update(value=> value + 1);
  }
}
