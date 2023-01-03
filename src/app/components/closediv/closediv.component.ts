import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-closediv',
  templateUrl: './closediv.component.html',
  styleUrls: ['./closediv.component.css'],
})
export class ClosedivComponent implements OnInit {
  icon = faTimes;
  constructor() {}

  ngOnInit(): void {}
  close() {}
}
