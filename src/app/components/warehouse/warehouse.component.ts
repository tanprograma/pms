import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css'],
})
export class WarehouseComponent implements OnInit {
  @Input() center?: any;

  nav = true;
  body = false;
  statistics = true;
  view?: any;
  form?: any;
  forms = [
    {
      form: 'warehouse',
      submit: (x: any) => {
        this.http
          .post(this.data.warehouses.url, { value: x })
          .subscribe((res) => {
            console.log(res);
            this.data.warehouses.collection.push(res);
          });
      },
      options: this.data.warehouses.collection.map((item: any) => {
        return item.store;
      }),
    },
    {
      form: 'store',
      url: this.data.stores.url,
      submit: (x: any) => {
        this.http.post(this.data.stores.url, { value: x }).subscribe((res) => {
          console.log(res);
          this.data.stores.collection.push(res);
        });
      },
      options: this.data.stores.collection.map((item: any) => {
        return item.store;
      }),
    },
    {
      form: 'unit',
      url: this.data.units.url,
      submit: (x: any) => {
        this.http.post(this.data.units.url, { value: x }).subscribe((res) => {
          console.log(res);
          this.data.units.collection.push(res);
        });
      },
      options: this.data.units.collection.map((item: any) => {
        return item.unit;
      }),
    },
  ];
  constructor(public data: DataService, private http: HttpService) {}

  ngOnInit(): void {}
  toggleApp() {
    this.nav = true;
    this.body = false;
  }
  toggleForms(form: string) {
    this.form = form;
  }

  myFunc(x: any) {
    console.log(x);
    this.view = x;
    this.nav = false;
    this.body = true;
  }
}
