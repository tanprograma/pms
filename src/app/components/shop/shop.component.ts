import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @Input() center?: any;
  @Input() display?: any;

  statistics = true;
  view?: any;
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {
    this.view = 'dispense';
  }
  toggleApp(view: string) {
    this.view = view;

    this.statistics = false;
  }

  fetchData(req: any) {
    this.http.get(req.url).subscribe((res) => {
      console.log('fetched stores successfully');
      // this.data.stores = medicines.map((item: any) => {
      //   return { medicine: item.medicine };
      // });
      req.collection = res;
      console.log(req.collection);
    });
  }
}
