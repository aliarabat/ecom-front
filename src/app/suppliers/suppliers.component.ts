import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../controller/services/suppliers.service';
import { Supplier } from '../controller/model/supplier';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  constructor(private supplierService: SuppliersService) { }

  suppliers: Supplier[];
  ngOnInit() {
    this.supplierService.getSuppliers().subscribe((data: any) => {
      console.log(data);
      this.suppliers = data._embedded.suppliers;
    }, (error) => {
      console.log(error);
    });
  }

}
