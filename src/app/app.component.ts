import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular tutorial How are you doing today';
  jsonValue = {
    a: 'hello',
    b: 'world'
  }

  newDate = new Date();

  constructor(private httpService: HttpService) {

  }

  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1');
  }
}
