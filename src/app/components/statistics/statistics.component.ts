import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  faTimes = faTimes;
  title?: any;
  navdataopened: boolean = false;
  style = {
    border: '1px solid black',
    'background-color': 'grey',
    color: 'white',
    height: '5vh',
    'min-width': '100px',
  };
  openNavData(title: any) {
    this.title = title;
    this.navdataopened = this.navdataopened
      ? this.navdataopened
      : !this.navdataopened;
    // some codes
  }
  closeNavData() {
    this.navdataopened = false;
  }
  constructor(public data: DataService, private http: HttpService) {}
  mapStores() {
    return this.data.stores.collection.map((item: any) => {
      return item.store;
    });
  }
  ngOnInit(): void {}
}
