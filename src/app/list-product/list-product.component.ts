import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProducts: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listProducts= [
      {id: '1', title: 'Tshirt 1', quantity: 10, price: 20, like: 0 },
      {id: '2', title: 'Tshirt 2', quantity: 189, price: 340, like: 0 },
      {id: '3', title: 'Tshirt 3', quantity: 39, price: 90, like: 0 },
      {id: '4', title: 'Tshirt 4', quantity: 0, price: 10, like: 0 }
    ];
  }
 incrementLike(p: Product){
    let i: number =this.listProducts.indexOf(p);
   this.listProducts[i].like!++;
 }
}
