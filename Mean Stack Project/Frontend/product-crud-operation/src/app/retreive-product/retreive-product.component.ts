import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-retreive-product',
  templateUrl: './retreive-product.component.html',
  styleUrls: ['./retreive-product.component.css']
})
export class RetreiveProductComponent implements OnInit {

  products?:Array<Product>
  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
      this.productSer.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }


}
