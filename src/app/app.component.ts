import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular tutorial How are you doing today';

  userObject = {
    name: 'Johnny',
    age: '32',
    id: 0,
   }

  newDate = new Date();

  constructor(private httpService: HttpService) {

  }

  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response) => { console.log(response)}
    );
  }
} 
