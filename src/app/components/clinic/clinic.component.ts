import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css'],
})
export class ClinicComponent implements OnInit {
  store?: any;
  stores?: any;
  form?: any;
  center?: any;
  navdatacontainer = false;

  closeNavDataContainer() {
    this.navdatacontainer = false;
  }
  openNavDataContainer(view: any) {
    this.form = '';
    this.store = view;
    this.center = view;
    this.navdatacontainer = this.navdatacontainer
      ? this.navdatacontainer
      : !this.navdatacontainer;
  }
  dispense = {
    title: 'dispense',
    selector: 'dispense',
  };

  issue = {
    title: 'issue',
    selector: 'issue',
  };
  request = {
    title: 'request',
    selector: 'request',
  };
  inventory = {
    title: 'inventory',
    selector: 'inventory',
  };
  secondarymenudata = [this.dispense, this.issue, this.request, this.inventory];
  nofcontrols: any = {
    control: [],
    nofmedicine: 0,
  };

  commodities?: any;

  toggleForms(x: any) {
    this.form = x;
  }
  mapMedicines() {
    return this.data.commodities.collection.map((item: any) => {
      return item.commodity;
    });
  }
  constructor(public data: DataService, private http: HttpService) {}

  ngOnInit(): void {}
  dispens(toAdd: any) {
    if (toAdd.commodities.length == 0) return;
    this.http.post(this.data.dispensed.url, toAdd).subscribe((res) => {
      this.data.dispensed.collection.push(res);
      console.log(res);
      console.log('item added successfully');
    });
    console.log(toAdd);
  }
  onDispense(v: any): void {
    v.host = this.center;
    const toAdd = v;
    this.dispens(toAdd);
    // end of mockdb
    // this.message = !this.message;
    this.nofcontrols.control = [];
    this.nofcontrols.nofmedicine = 0;
  }
}
