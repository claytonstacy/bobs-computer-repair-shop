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
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
   }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      customerId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  get form() { return this.signinForm.controls; }

  onSubmit() {
    const formValues = this.signinForm.value;
    const customerId = parseInt(formValues.customerId);

    if (this.signinService.validate(customerId)) {
      this.cookieService.set('session_user', customerId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = `The customer ID you entered is invalid, please try again.`;
    }
  }
}
