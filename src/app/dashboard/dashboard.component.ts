import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../models/product';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    products:Product[] | undefined;
    constructor(private productService: ProductServiceService){
    }
  
    ngOnInit() {
  
       this.productService.getProducts()
         .subscribe(data => {
           this.products=data;
         })
    }

}
