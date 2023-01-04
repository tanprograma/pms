import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // transactions: any = {
  //   url: 'http://localhost:3000/transactions',
  //   collection: [],
  // };
  commodities: any = {
    url: 'http://localhost:5500/commodities',
    collection: [],
  };
  units: any = {
    url: 'http://localhost:5500/units',
    collection: [],
  };
  dispensed: any = {
    url: 'http://localhost:5500/dispensed',
    collection: [],
  };
  requests: any = {
    url: 'http://localhost:5500/requests',
    collection: [],
  };
  inventory: any = {
    url: 'http://localhost:5500/inventory',
    collection: [],
  };
  stores: any = {
    url: 'http://localhost:5500/stores',
    collection: [],
  };
  warehouses: any = {
    url: 'http://localhost:5500/warehouses',
    collection: [],
  };
  constructor() {}
}
