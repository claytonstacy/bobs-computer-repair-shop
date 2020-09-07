/*
============================================
Title: 9.2- Bob's Computer Repair Shop
Author: Clayton Stacy
Date: 6 September 2020
Modified by: Clayton Stacy
Description:
============================================
*/

export interface IInvoice {
  id: number;
  customer_name: string;
  customer_id: number;
  date_created: string;
  date_paid: string;
  subtotal: number;
  tax: number;
  total: number;
  labor_description: Array<string>;
  labor_hours: number;
  labor_rate: number;
  labor_total: number;
  services_description: Array<string>;
  services_total: number;
  parts_description: Array<string>
  parts_total: number;
}
