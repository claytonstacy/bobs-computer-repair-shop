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
import { IInvoice } from '../invoices.interface';

@Component({
  selector: 'app-invoice-details-dialog',
  templateUrl: './invoice-details-dialog.component.html',
  styleUrls: ['./invoice-details-dialog.component.scss']
})
export class InvoiceDetailsDialogComponent implements OnInit {
  invoice: IInvoice;

  constructor(private dialogRef: MatDialogRef<InvoiceDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice;
  }

  ngOnInit(): void {
  }

}
