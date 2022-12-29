import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-pms-app',
  templateUrl: './pms-app.component.html',
  styleUrls: ['./pms-app.component.css'],
})
export class PmsAppComponent implements OnInit {
  @Input() center?: any;
  nav = true;
  body = false;
  statistics = true;
  view?: any;
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {
    const reqs = [
      this.data.dispense,
      this.data.requests,
      this.data.inventory,
      this.data.stores,
      this.data.commodities,
      this.data.units,
    ];
    reqs.forEach((req: any) => {
      this.fetchData(req);
    });
  }
  toggleApp() {
    this.nav = true;
    this.body = false;
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
  myFunc(x: any) {
    console.log(x);
    this.view = x;
    this.nav = false;
    this.body = true;
  }
}
