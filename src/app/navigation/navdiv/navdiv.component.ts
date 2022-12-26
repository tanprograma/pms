import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navdiv',
  templateUrl: './navdiv.component.html',
  styleUrls: ['./navdiv.component.css'],
})
export class NavdivComponent implements OnInit {
  @Input() app?: any;
  @Input() navname?: any;
  @Output() sendView = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.navname);
    this.sendView.emit(this.navname);
  }
}
