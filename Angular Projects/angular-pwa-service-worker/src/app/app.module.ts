import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonAppComponent } from './button-app/button-app.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    AppComponent,
    ButtonAppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
