import { Component } from '@angular/core';
import { CreateService } from '../createService/create.service';
import { Customer } from '../interfaces/customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  constructor(private serviceCreate: CreateService<Customer>) {
    this.serviceCreate.create({id:"1", name: "Adrian Davia", phone: "999999999"});
  }
}
