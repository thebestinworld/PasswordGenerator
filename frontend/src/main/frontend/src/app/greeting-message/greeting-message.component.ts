import {Component, OnInit} from '@angular/core';
import {GreetingMessageService} from "./greeting-message.service";

@Component({
  selector: 'app-greeting-message',
  templateUrl: './greeting-message.component.html',
  styleUrls: ['./greeting-message.component.css'],
  providers: [GreetingMessageService]
})
export class GreetingMessageComponent implements OnInit {
  msg: GreetingMessage;

  constructor(private greetingMessageService: GreetingMessageService) {
  }

  ngOnInit() {
    this.greetingMessageService.getMessage().subscribe(data => this.msg = data);
  }

}
