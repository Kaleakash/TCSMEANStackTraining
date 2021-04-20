import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-by-id',
  templateUrl: './retrieve-by-id.component.html',
  styleUrls: ['./retrieve-by-id.component.css']
})
export class RetrieveByIdComponent implements OnInit {
  resultMsg?:string;
  constructor(public productSer:ProductService) { } //DI

  ngOnInit(): void {
  }
  searchDetails(id:any){
    console.log("Id is "+id);
    this.productSer.retrieveProductById(id).subscribe(result=> {
      console.log(result)
      if(result?.length>0){
          this.resultMsg="id is "+result[0]._id+" Product Name "+result[0].pname+" Price "+result[0].price;
      }else {
          this.resultMsg="Product is not present";
      }
    }
    );

  }
}
