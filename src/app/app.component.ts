import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular tutorial How are you doing today';

  userObject = {
    name: 'Johnny',
    age: '32',
    id: 0,
    isColored: true
  }


  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts');

  showUser: boolean = true;


  newDate = new Date();

  constructor(private httpService: HttpService) {}

  handleEvent(event: any) {
    console.log(event);
  }

 

  ngOnInit() {
    //this.getPosts();
  }

} 
