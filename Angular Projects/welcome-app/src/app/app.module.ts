import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {ChildComponent} from './child.component';
import { Child1 } from './child1.component';


@NgModule({
  declarations: [
    AppComponent,ChildComponent,Child1   // all components. 
  ],
  imports: [
    BrowserModule // this module is use to render the output on browser. 
  ],
  providers: [],  // angular sevice details 
  bootstrap: [AppComponent] // first or parent component in that modules. 
})

export class AppModule { }
