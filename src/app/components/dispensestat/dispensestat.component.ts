import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DispenseService } from 'src/app/services/dispense.service';
import { TabledispService } from 'src/app/services/tabledisp.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dispensestat',
  templateUrl: './dispensestat.component.html',
  styleUrls: ['./dispensestat.component.css'],
})
export class DispensestatComponent implements OnInit {
  form?: any;
  search = false;

  constructor(public datas: TabledispService) {}

  ngOnInit(): void {}

  getDispensed(f: NgForm) {
    const date = new Date(f.value.date).toLocaleDateString();
    this.datas.dispenseRecordsOnDate(date);
  }
  getDispenseds(f: NgForm) {
    const min = new Date(f.value.min).toLocaleDateString();
    const max = new Date(f.value.max).toLocaleDateString();

    this.datas.dispenseRecordsOnRange(min, max);
  }
  dateDispensed(date: any) {}
  dateRangeDispensed(min: any, max: any) {}
  toggleSearch(form: any) {
    this.form = form;
    this.search = this.search ? this.search : !this.search;
  }
}
