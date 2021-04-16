import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);
  }
}
