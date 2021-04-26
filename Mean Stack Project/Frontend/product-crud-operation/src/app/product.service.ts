import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ipAddress:string="http://3.88.87.203:9090";
  
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  storeProductDetailsInfo(productRef:any){
    this.http.post(this.ipAddress+"/product/storeProductDetails",productRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  retrieveAllProductDetails():Observable<Product[]>{
     return this.http.get<Product[]>(this.ipAddress+"/product/allProductDetails")
  }

  retrieveProductById(id:any):Observable<Product[]>{
    return this.http.get<Product[]>(this.ipAddress+"/product/retrieveProductById/"+id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(id:any):any{
    return this.http.delete(this.ipAddress+"/product/deleteProductById/"+id,{responseType:'text'});
  }

  updateProductPrice(productRef:any):any{
    return this.http.put(this.ipAddress+"/product/updateProductPrice",productRef,{responseType:'text'})
  }
}
