import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  @Input() data?: any;
  @Output() dataChange = new EventEmitter<any>();
  nav = true;
  body = false;
  statistics = true;
  view?: any;
  constructor() {}

  ngOnInit(): void {}
  toggleApp() {
    this.nav = true;
    this.body = false;
  }

  myFunc(x: any) {
    console.log(x);
    this.view = x;
    this.nav = false;
    this.body = true;
  }
}
