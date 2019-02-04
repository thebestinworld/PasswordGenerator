import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GreetingMessageModule} from "./greeting-message/greeting-message.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GreetingMessageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
