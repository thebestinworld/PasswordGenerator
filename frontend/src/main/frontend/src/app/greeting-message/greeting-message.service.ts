import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GreetingMessageService {

  constructor(private httpClient: HttpClient) {

  }

  getMessage() {
    return this.httpClient.get<GreetingMessage>('/greetingMessage')
  }
}
