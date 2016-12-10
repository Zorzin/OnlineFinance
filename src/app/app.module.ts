import { CreateReciptComponent } from './receipt/createreceipt.component';
import { DetailsComponent } from './receipt/details.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReceiptComponent,
    DetailsComponent,
    CreateReciptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
