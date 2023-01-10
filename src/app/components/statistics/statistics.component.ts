import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DispensedtableService } from 'src/app/statistics/services/dispensedtable.service';
import { DispenseddataService } from 'src/app/statistics/services/dispenseddata.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  constructor(
    private data: DispenseddataService,
    public dispensed: DispensedtableService
  ) {}

  secondaryView = false;
  searchesView = false;
  searches?: any;
  ngOnInit(): void {}
  closeSecondaryView() {
    this.secondaryView = this.secondaryView
      ? !this.secondaryView
      : this.secondaryView;
  }
  toggleSecondaryView() {
    this.secondaryView = !this.secondaryView;
  }
  toggleSearchesView(view: any) {
    this.searches = view;
    this.searchesView = !this.searchesView;
  }
  // //////////////////////////////////form functionality
  getToday() {
    const today = new Date().toLocaleDateString();
    const date: any = this.getDateAsValue(today);
    console.log(date);
    const filtered = this.filterOne(date);
    this.dispensed.getDispensed(filtered);
    // console.log(filtered);
  }
  getOne(f: NgForm) {
    const date: any = this.getDateAsValue(f.value.single);
    console.log(date);
    const filtered = this.filterOne(date);
    this.dispensed.getDispensed(filtered);
    // console.log(filtered);
  }
  getRanges(f: NgForm) {
    const min: any = this.getDateAsValue(f.value.min);
    const max: any = this.getDateAsValue(f.value.max);
    const filtered = this.filterRange(min, max);
    console.log(filtered);
    this.dispensed.getDispensed(filtered);
  }
  getDateAsValue(date: any): any {
    const dt = new Date(date).toLocaleDateString();
    return new Date(dt).valueOf();
  }
  filterOne(date: any): any {
    return this.data.dispensed.collection.filter((item: any) => {
      return item.date == date;
    });
    // console.log(this.data.dispensed.collection);
  }
  filterRange(min: any, max: any): any {
    return this.data.dispensed.collection.filter((item: any) => {
      return item.date >= min && item.date <= max;
    });
  }
}
