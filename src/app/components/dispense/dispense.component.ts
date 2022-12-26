import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { UrlsService } from 'src/app/services/urls.service';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css'],
})
export class DispenseComponent implements OnInit {
  @Input() center?: any;
  dataViewData: any = [];
  formValue?: any;
  message = false;
  // personal variables for views
  dataView = true;
  formView = false;
  nofmedicines = 0;
  nofcontrols: any = [];
  nofquantities: any = [];
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}
  getMedicines() {
    return this.data.commodities.collection.map((item: any) => {
      return item.commodity;
    });
  }
  ngOnInit(): void {}
  // createInputs(x: NgForm) {
  //   this.nofmedicines += x.value.name;
  //   for (let i = this.nofcontrols.length; i < this.nofmedicines; i++) {
  //     this.nofcontrols.push({ med: `med${1 + i}`, quant: `quant${1 + i}` });
  //   }
  //   x.reset();
  // }
  createInputs(x: any) {
    this.nofmedicines += x;
    for (let i = this.nofcontrols.length; i < this.nofmedicines; i++) {
      this.nofcontrols.push({ med: `med${1 + i}`, quant: `quant${1 + i}` });
    }
    console.log(`increase: ${x}`);
    console.log(`nofmedicines :${this.nofmedicines}`);
    console.log(this.nofcontrols);
  }
  // ValidateInput(f: NgForm) {
  //   let isValid = true;
  //   const keys = Object.keys(f.value);
  //   for (let i = 0; i < keys.length; i++) {
  //     if (f.value[keys[i]] == null || f.value[keys[i]] == '') {
  //       isValid = !isValid;
  //       break;
  //     }
  //     // return;
  //   }
  //   return isValid;
  // }
  // mapInput(f: NgForm) {
  //   return {
  //     host: this.center,
  //     date: new Date().toLocaleDateString(),
  //     client: f.value.client,
  //     medications: this.nofcontrols.map((item: any) => {
  //       return {
  //         medicine: f.value[item.med].toLowerCase(),
  //         quantity: f.value[item.quant],
  //       };
  //     }),
  //   };
  // }
  dispense(toAdd: any) {
    this.http.post(this.data.dispense.url, toAdd).subscribe((res) => {
      this.data.dispense.collection.push(res);
      console.log(res);
      console.log('item added successfully');
    });
  }
  onDispense(v: any): void {
    v.host = this.center;
    const toAdd = v;
    this.dispense(toAdd);
    // end of mockdb
    this.message = !this.message;
    this.nofcontrols = [];
    this.nofmedicines = 0;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
  runFormView() {
    this.formView = this.formView ? this.formView : !this.formView;
    this.dataView = false;
  }
  runDataView() {
    this.dataView = this.dataView ? this.dataView : !this.dataView;
    this.formView = false;
  }
  // onDataView() {
  //   this.dataViewData = this.nofcontrols.map((item: any, index: any) => {
  //     return {
  //       medicine: this.formValue.value[item.med].toLowerCase(),
  //       quantity: this.formValue.value[item.quant],
  //       sn: index + 1,
  //     };
  //   });
  // }
  // save(f: NgForm) {
  //   this.formValue = f;
  // }
}
