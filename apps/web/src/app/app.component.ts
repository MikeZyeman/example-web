import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@example-web/api-interfaces';

@Component({
  selector: 'example-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
