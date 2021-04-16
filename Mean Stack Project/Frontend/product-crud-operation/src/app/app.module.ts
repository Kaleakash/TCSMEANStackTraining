import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreProductComponent } from './store-product/store-product.component';
import { RetreiveProductComponent } from './retreive-product/retreive-product.component';
import { DeleteProductByIdComponent } from './delete-product-by-id/delete-product-by-id.component';
import { UpdateProductPriceComponent } from './update-product-price/update-product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreProductComponent,
    RetreiveProductComponent,
    DeleteProductByIdComponent,
    UpdateProductPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
