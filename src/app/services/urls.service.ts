import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  inventory = 'http://localhost:3000/inventory';
  commodities = 'http://localhost:3000/commodities';
  transactions = 'http://localhost:3000/transactions';
  requests = 'http://localhost:3000/requests';
  stores = 'http://localhost:3000/stores';
  constructor() {}
}
