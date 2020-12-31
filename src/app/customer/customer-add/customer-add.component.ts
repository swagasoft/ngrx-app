import { addCustomer } from './../store/action/customer.actions';
import { Customer } from './../../models/customer';
import { CustomerState } from './../store/reducer/customer.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store : Store<CustomerState>) { }

  ngOnInit(): void {
  }


  addCustomer(customerName : string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }

}
