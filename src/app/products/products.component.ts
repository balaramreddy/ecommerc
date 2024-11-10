import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchText: string = '';
  data: any[] = [];
  category: any[] = [];
  group:any

  constructor(private http: ProductsService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.getproducts().subscribe({
      next: (res: any) => {
        this.data = res.products;
        // console.log(res.products);

        this.group = res.products.reduce((acc: any, val: any) => ((acc[val.category] = acc[val.category] || []).push(val), acc), {});
        console.log(this.group);

        // this.category = [...new Set(res.products.map(({category}: any) => category))];
        // console.log(this.category);
      }
    });

    this.http.getCategories().subscribe({
      next:(res:any)=> {
        this.category = res
        console.log(res);
      }
    })
  }

  getGroupKeys() {
    return Object.keys(this.group);
  }
  
  showData(data:any){
    console.log(data);

  }
  viewItem(data:any){
    let filter = this.group[data.category].filter((val:any)=>val.id !==data.id)

    this.dialog.open(DialogComponent, {
      width: '75vw',
      maxWidth: '100vw', 
      height: '90vh',
      data:{
        viewData:data,
        relatedProducts:filter
      }
    });
  }
}


