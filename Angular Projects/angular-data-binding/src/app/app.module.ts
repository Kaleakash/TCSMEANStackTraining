import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StructureDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
