import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { DispenseService } from 'src/app/services/dispense.service';
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
    private dismed: DispenseService,
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {
    this.view = 'outlets';
    this.data.inventory.url = `${this.data.inventory.url}/allstores`;
    const reqs = [
      this.data.dispensed,
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
    this.fetchDispense();
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
  fetchDispense() {
    this.http.get(this.dismed.commodities.url).subscribe((res: any) => {
      this.dismed.commodities.collection = this.mapMedicines(res);
    });
    this.http.get(this.dismed.dispensed.url).subscribe((res: any) => {
      this.dismed.dispensed.collection = this.mapDispensed(res);
    });
  }

  mapMedicines(res: any) {
    return res.map((item: any) => {
      return {
        id: item._id,
        commodity: item.medicine,
      };
    });
  }
  mapDispensed(res: any) {
    return res.map((item: any) => {
      return {
        date: this.convertDate(new Date(item.date).toLocaleDateString()),
        id: item._id,
        commodities: this.mapDispensedCommodities(item.medications),
      };
    });
  }
  convertDate(date: any) {
    return new Date(date).valueOf();
  }
  mapDispensedCommodities(commodities: any) {
    return commodities.map((item: any) => {
      return {
        commodity: item.medicine,
        quantity: item.quantity,
      };
    });
  }
}
