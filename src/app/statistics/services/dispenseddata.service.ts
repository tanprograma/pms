import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// provides the required data to go into the app
export class DispenseddataService {
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
