import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {ChildComponent} from './child.component';

@NgModule({
  declarations: [
    AppComponent,ChildComponent    // all components. 
  ],
  imports: [
    BrowserModule // this module is use to render the output on browser. 
  ],
  providers: [],  // angular sevice details 
  bootstrap: [AppComponent] // first or parent component in that modules. 
})

export class AppModule { }
