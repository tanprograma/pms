import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-insidenav',
  templateUrl: './insidenav.component.html',
  styleUrls: ['./insidenav.component.css'],
})
export class InsidenavComponent implements OnInit {
  @Input() site?: any;
  constructor() {}

  ngOnInit(): void {}
}
