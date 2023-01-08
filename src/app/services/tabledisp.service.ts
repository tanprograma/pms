import { Injectable } from '@angular/core';
import { DispenseService } from './dispense.service';
@Injectable({
  providedIn: 'root',
})
export class TabledispService {
  dispensed: any = [];
  constructor(private data: DispenseService) {}
  getValueFromDoc(comparator: any, medications: any): any {
    let value = 0;
    medications.forEach((commodity: any) => {
      if (comparator == commodity.commodity) value += commodity.quantity;
    });
    return value;
  }
  // return value from Documents
  getValueFromDocs(comparator: any, docs: any): any {
    let value = 0;
    docs.forEach((doc: any) => {
      value += this.getValueFromDoc(comparator, doc.commodities);
    });
    return value;
  }
  // return the document
  getReducedDoc(comparator: any, docs: any): any {
    return {
      commodity: comparator,
      quantity: this.getValueFromDocs(comparator, docs),
    };
  }

  filterDispensed(dispensed: any) {
    return dispensed.filter((item: any) => {
      return item.quantity != 0;
    });
  }
  sortDispensed(dispensed: any) {
    return dispensed.sort((a: any, b: any) => {
      const name1 = a.commodity.toUpperCase();
      const name2 = b.commodity.toUpperCase();
      if (name1 > name2) {
        return 1;
      }
      if (name1 < name2) {
        return -1;
      }
      return 0;
    });
  }
  mapDispensed(dispensed: any): any {
    return dispensed.map((item: any, index: any) => {
      return {
        sn: index + 1,
        commodity: item.commodity,
        quantity: item.quantity,
      };
    });
  }
  cleanDispensed(dispensed: any): any {
    const filtered: any = this.filterDispensed(dispensed);
    const sorted = this.sortDispensed(filtered);
    const mapped = this.mapDispensed(sorted);
    return mapped;
  }

  getDispensed(docs: any): any {
    const dispensed: any = [];
    this.data.commodities.collection.forEach((comparator: any) => {
      const reducedDoc = this.getReducedDoc(comparator.commodity, docs);
      dispensed.push(reducedDoc);
    });
    this.dispensed = this.cleanDispensed(dispensed);
    // console.log(docs);
  }
}
