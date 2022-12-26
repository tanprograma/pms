import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() manage?: any;
  @Input() app?: any;
  @Input() navData?: any;
  @Output() sendView = new EventEmitter<any>();
  view?: any;
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.navData.length; i++) {
      if (this.navData[i].default) {
        this.view = this.navData[i].navname;
        break;
      }
    }
  }
  onClick(x: any) {
    this.view = x;
    this.sendView.emit(x);
  }
}
