import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PMS';
  view?: any;
  app = true;
  manage = false;
  navData: any = [
    { navname: 'outlets', default: true },
    { navname: 'statistics' },
    { navname: 'manage' },
  ];
  constructor() {
    this.view = 'outlets';
  }
  toggleManage() {
    this.manage = true;
    this.app = false;
  }
  toggleApp() {
    this.manage = false;
    this.app = true;
  }
}
