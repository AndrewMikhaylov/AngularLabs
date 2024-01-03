import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormatPipe} from "./format.pipe";
import {JoinPipe} from "./join.pipe";
import {SqrtPipe} from "./sqrt.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FormatPipe,
    JoinPipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
