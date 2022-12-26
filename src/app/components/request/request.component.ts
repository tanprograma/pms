import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { UrlsService } from 'src/app/services/urls.service';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
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

  ngOnInit(): void {}
  createInputs(x: NgForm) {
    this.nofmedicines += x.value.name;
    for (let i = this.nofcontrols.length; i < this.nofmedicines; i++) {
      this.nofcontrols.push({ med: `med${1 + i}`, quant: `quant${1 + i}` });
    }
    x.reset();
  }
  ValidateInput(f: NgForm) {
    let isNull = false;
    const keys = Object.keys(f.value);
    for (let i = 0; i < keys.length; i++) {
      if (f.value[keys[i]] == null || f.value[keys[i]] == '') {
        isNull = !isNull;
        break;
      }
      // return;
    }
    return isNull;
  }
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    let isNull = this.ValidateInput(f);
    console.log(isNull);
    if (isNull) {
      console.log('empty fields');
      return;
    }
    const medications: any = this.nofcontrols.map((item: any) => {
      return {
        medicine: f.value[item.med].toLowerCase(),
        quantity: f.value[item.quant],
      };
    });
    const toAdd = {
      processed: false,
      destination: this.center,
      date: new Date().toLocaleDateString(),
      host: f.value.client,
      medications: medications,
    };
    // console.log(toAdd);
    f.reset();

    // with mock-database
    this.http.post(this.data.requests.url, toAdd).subscribe((res) => {
      console.log(res);
      // const itemmodified = {
      //   medications: dispensed.medications,
      //   date: dispensed.date,
      // };

      this.data.requests.collection.push(res);
    });
    // // end of mockdb
    // this.message = !this.message;
    this.nofcontrols = [];
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
