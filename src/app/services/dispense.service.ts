import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DispenseService {
  dispensed: any = {
    url: 'https://tanprograma.github.io/tandbs/dispensed.json',
    collection: [],
  };
  commodities: any = {
    url: 'https://tanprograma.github.io/tandbs/medicines.json',
    collection: [],
  };

  constructor() {}
}
