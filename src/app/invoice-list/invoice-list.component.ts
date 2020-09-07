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
import { InvoicesService } from '../invoices.service';
import { IInvoice } from '../invoices.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDetailsDialogComponent } from '../invoice-details-dialog/invoice-details-dialog.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Observable<IInvoice[]>;
  header: Array<string> = ['id', 'customer_name', 'total', 'date_paid'];
  invoice: IInvoice;

  constructor(private invoicesService: InvoicesService, private dialog: MatDialog) {
    this.invoices = this.invoicesService.getInvoices();
   }

  ngOnInit(): void {
  }

  showInvoiceDetails(id: number) {
    this.invoice = this.invoicesService.getInvoice(id);
    const dialogRef = this.dialog.open(InvoiceDetailsDialogComponent, {
      data: {
        invoice: this.invoice
      },
      disableClose: true,
      width: '800px'
    })
    console.log(this.invoice);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.invoice = null;
      }
    });
  }

}
