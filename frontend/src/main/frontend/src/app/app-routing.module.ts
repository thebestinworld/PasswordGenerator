import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GreetingMessageComponent} from "./greeting-message/greeting-message.component";

const routes: Routes = [
  {path:'message',component:GreetingMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
