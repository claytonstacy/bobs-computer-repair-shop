/*
============================================
Title: 9.2- Bob's Computer Repair Shop
Author: Clayton Stacy
Date: 6 September 2020
Modified by: Clayton Stacy
Description:
============================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-verify-order-dialog',
  templateUrl: './verify-order-dialog.component.html',
  styleUrls: ['./verify-order-dialog.component.scss']
})
export class VerifyOrderDialogComponent implements OnInit {

  formValues = [];

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    console.log(data.data)
    this.formValues = data;
   }

  ngOnInit(): void {
  }

}
