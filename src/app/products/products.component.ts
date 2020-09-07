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
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VerifyOrderDialogComponent } from '../verify-order-dialog/verify-order-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  form: FormGroup;
   products = [];


  constructor(private fb: FormBuilder, private dialog: MatDialog) {

  }

  onChangeEventFunc(product: {id: number, name: string, description: string, price: number, quantity: number}, isChecked: {sourece: string, checked: boolean}) {
    console.log('This is the boolean',isChecked);

    const selectedProducts = (this.form.controls.products as FormArray);
    if (isChecked.checked) {
      selectedProducts.push(new FormControl(product));
    } else {
      const index = selectedProducts.controls.findIndex(x => x.value.id === product.id);
      console.log('This is the index', index)
      selectedProducts.removeAt(index);
    }
    console.log('These are the selectedProducts', selectedProducts);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      products: this.fb.array([]),
      customService: ''
    });

    this.products = [
      {
        id: 1,
        name: 'Password Reset',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
        price: 39.99,
        quantity: 0,
        picture_path: '../assets/passwordrReset.png',
      },
      {
        id: 2,
        name: 'Spyware Removal',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
        price: 99.99,
        quantity: 0,
        picture_path: '../assets/spywareRemoval.png',
      },
      {
        id: 3,
        name: 'RAM Upgrade',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
        price: 129.99,
        quantity: 0,
        picture_path: '../assets/spywareRemoval.png',
      },
      {
        id: 4,
        name: 'Tune Up',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
        price: 89.99,
        quantity: 0,
        picture_path: '../assets/spywareRemoval.png',
      },
      {
        id: 5,
        name: 'Disk Cleanup',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
        price: 149.99,
        quantity: 0,
        picture_path: '../assets/spywareRemoval.png',
      },
      {
        id: 6,
        name: 'Installations',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
        price: 49.99,
        quantity: 0,
        picture_path: '../assets/spywareRemoval.png',
      }
    ];
  }

  verifyOrder(formValues) {
    const dialogRef = this.dialog.open(VerifyOrderDialogComponent, {
      data: {
        formValues: formValues
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
      }
    });
  }
  submit() {
    console.log(this.form.value.prod);
  }

}
