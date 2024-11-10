import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent implements OnInit {
  productdata:any
  relatedprods:any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
      this.productdata = this.data.viewData
      console.log(this.data.viewData);
      
      this.relatedprods = this.data.relatedProducts
      console.log(this.relatedprods);
  }
}
