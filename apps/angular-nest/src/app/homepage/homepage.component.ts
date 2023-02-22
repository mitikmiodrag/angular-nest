import { Component, OnInit } from '@angular/core';
import {Message} from "@angular-nest/api-interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'angular-nest-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
