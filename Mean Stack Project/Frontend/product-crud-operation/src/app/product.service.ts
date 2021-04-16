import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 

  storeProductDetailsInfo(productRef:any){
    this.http.post("http://localhost:9090/product/storeProductDetails",productRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}
