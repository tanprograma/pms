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
    url: 'http://localhost:3000/commodities',
    collection: [],
  };
  dispense: any = {
    url: 'http://localhost:3000/dispense',
    collection: [],
  };
  requests: any = {
    url: 'http://localhost:3000/requests',
    collection: [],
  };
  inventory: any = {
    url: 'http://localhost:3000/inventory',
    collection: [],
  };
  stores: any = {
    url: 'http://localhost:3000/stores',
    collection: [],
  };
  constructor() {}
}
