import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StructureDirectiveComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
