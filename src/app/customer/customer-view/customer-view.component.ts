import { selectCustomers } from './../store/selector/customer.selectors';
import { CustomerState } from './../store/reducer/customer.reducer';
import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
customers$: Observable<Customer[]>
  constructor(private store: Store<CustomerState>) { 
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
  }

}
