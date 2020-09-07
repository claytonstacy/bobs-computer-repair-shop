/*
============================================
Title: 9.2- Bob's Computer Repair Shop
Author: Clayton Stacy
Date: 6 September 2020
Modified by: Clayton Stacy
Description:
============================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  customerIds: Array<number>;

  constructor() {
    this.customerIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(customerId: number) {
    return this.customerIds.some(id => id === customerId);
  }
}
