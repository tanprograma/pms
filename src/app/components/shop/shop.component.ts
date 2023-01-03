import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @Input() center?: any;
  @Input() display?: any;
  @Input() data?: any;
  @Output() dataChange = new EventEmitter<any>();

  statistics = true;
  view?: any;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.view = 'dispense';
  }

  toggleApp(view: string) {
    this.view = view;

    this.statistics = false;
  }
}
