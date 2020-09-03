import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SnellCalcComponent } from './snell-calc/snell-calc.component';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SnellCalcComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
