import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-chief-component',
  templateUrl: './chief-component.component.html',
  styleUrls: ['./chief-component.component.css'],
})
export class ChiefComponentComponent implements OnInit {
  view?: any;
  app = true;
  manage = false;
  // creates the names of navigation views
  navData: any = [
    { navname: 'outlets', default: true },
    { navname: 'warehouses', default: true },
    { navname: 'statistics' },
    { navname: 'manage' },
  ];
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {
    this.view = 'outlets';
    this.data.inventory.url = `${this.data.inventory.url}/allstores`;
    const reqs = [
      this.data.dispense,
      this.data.requests,
      this.data.inventory,
      this.data.stores,
      this.data.commodities,
      this.data.units,
      this.data.warehouses,
    ];
    reqs.forEach((req: any) => {
      this.fetchData(req);
    });
  }

  toggleManage() {
    this.manage = true;
    this.app = false;
  }
  toggleApp() {
    this.manage = false;
    this.app = true;
  }
  fetchData(req: any) {
    this.http.get(req.url).subscribe((res) => {
      console.log('fetched item successfully');
      // this.data.stores = medicines.map((item: any) => {
      //   return { medicine: item.medicine };
      // });
      req.collection = res;
      console.log(req.collection);
    });
  }
}
