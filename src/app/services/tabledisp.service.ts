import { Injectable } from '@angular/core';
import { DispenseService } from './dispense.service';
@Injectable({
  providedIn: 'root',
})
export class TabledispService {
  dispensed?: any;
  constructor(private data: DispenseService) {}
  dispenseRecordsOnDate(date: any) {
    this.dispensed = [];
    const raw = this.getRaw(date);

    this.finalize(raw);
  }
  dispenseRecordsOnRange(min: any, max: any) {
    this.dispensed = [];
    const raw = this.getRaws(min, max);

    this.finalize(raw);
  }
  //
  getRaw(date: any) {
    // works perfectly
    return this.data.dispensed.filter((record: any) => {
      return record.date == date;
    });
  }
  getRaws(min: any, max: any) {
    // works perfectly
    min = this.castTime(new Date(min).toLocaleDateString());
    max = this.castTime(new Date(max).toLocaleDateString());
    return this.data.dispensed.filter((record: any) => {
      const test = this.castTime(new Date(record.date).toLocaleDateString());
      return test >= min || test <= max;
    });
  }
  castTime(date: any) {
    const oldDate = new Date(date).valueOf();
    // console.log(oldDate.setDate(oldDate.getDay()));
    console.log(oldDate);
    return oldDate;
  }
  // shared function
  finalize(raws: any) {
    this.mapQuantity(raws);
    this.filter();
    this.sort();
  }
  mapQuantity(raw: any) {
    this.data.medicines.forEach((medicine: any) => {
      let quantity = 0;
      raw.forEach((item: any) => {
        item.commodities.forEach((commodity: any) => {
          if (commodity.commodity == medicine.commodity) {
            quantity += commodity.quantity;
          }
        });
      });

      this.dispensed.push({
        commodity: medicine.commodity,
        quantity: quantity,
      });
    });
  }
  filter() {
    this.dispensed = this.dispensed
      .filter((item: any) => {
        return item.quantity > 0;
      })
      .map((filtered: any, index: any) => {
        return {
          sn: index + 1,
          commodity: filtered.commodity,
          quantity: filtered.quantity,
        };
      });
    console.log(this.dispensed);
  }
  sort() {
    this.dispensed.sort((a: any, b: any) => {
      const commodityA = a.commodity.toUpperCase(); // ignore upper and lowercase
      const commodityB = b.commodity.toUpperCase(); // ignore upper and lowercase
      if (commodityA < commodityB) {
        return -1;
      }
      if (commodityA > commodityB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
}
