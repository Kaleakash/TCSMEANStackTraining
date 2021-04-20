import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-price',
  templateUrl: './update-product-price.component.html',
  styleUrls: ['./update-product-price.component.css']
})
export class UpdateProductPriceComponent implements OnInit {
  updateMsg?:string;
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }
  updatePrice(productRef:any){
    console.log(productRef);
    this.productService.updateProductPrice(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}
