import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DispenseService {
  dispensed: any = [];
  medicines: any = [];
  constructor() {}
}
