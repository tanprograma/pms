import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TogglemainService {
  view?: any;
  views = ['outlets', 'warehouse', 'statistics', 'manage'];
  constructor() {}
  toggleView(view: any) {
    this.view = view;
    console.log(view);
  }
}
