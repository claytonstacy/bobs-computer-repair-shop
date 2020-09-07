/*
============================================
Title: 6.2- Output Properties
Author: Clayton Stacy
Date: 10 August 2020
Modified by: Clayton Stacy
Description: Demonstrate Communication Between Components
============================================
*/

import { Injectable } from '@angular/core';
import { IInvoice } from './invoices.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
/* import { map } from 'rxjs'; */


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  invoices: Array<IInvoice>;

  constructor() {
    this.invoices = [
      {
        id: 1234,
        customer_name: 'Clayton Stacy',
        customer_id: 1,
        date_created: '9/1/2020',
        date_paid: '9/1/2020',
        subtotal: 123.5,
        tax: 8.64,
        total: 132.14,
        labor_description: ['Fan replacement'],
        labor_hours: .5,
        labor_rate: 50,
        labor_total: 25,
        services_description: ['Tune up'],
        services_total: 89.99,
        parts_description: ['Replacement Fan'],
        parts_total: 8.51
      },
        {
          id: 1235,
          customer_name: 'John Doe',
          customer_id: 2,
          date_created: '6/1/2020',
          date_paid: '7/1/2020',
          subtotal: 144.98,
          tax: 10.15,
          total: 155.13,
          labor_description: ['Install RAM'],
          labor_hours: .5,
          labor_rate: 50,
          labor_total: 25,
          services_description: ['Password Reset'],
          services_total: 69.99,
          parts_description: ['New RAM'],
          parts_total: 49.99}


    ]
   }
  getInvoices(): Observable<IInvoice[]> {
    return of(this.invoices);
  }

  getInvoice(id: number): IInvoice {
    for (let invoice of this.invoices) {
      if (invoice.id === id) {
        return invoice;
      }
    }
  }

}
