import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  constructor() { }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Ord HP 564', price: '4266' },
      { id: 2, name: 'Imprimante LX 11', price: '2469' },
      { id: 3, name: 'Smart Phone Samsung S10', price: '4963' },
    ];
  }

}
