import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {GreetingMessageComponent} from "./greeting-message.component";

@NgModule({
  declarations: [
    GreetingMessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [GreetingMessageComponent]
})
export class GreetingMessageModule {

}
