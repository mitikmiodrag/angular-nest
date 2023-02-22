import { Component, OnInit } from '@angular/core';
import {Message} from "@angular-nest/api-interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'angular-nest-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/welcome');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('welcome page');
  }
}
