import { Component, OnInit } from '@angular/core';
import { DispensedtableService } from 'src/app/statistics/services/dispensedtable.service';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css'],
})
export class PrintComponent implements OnInit {
  constructor(public dispensed: DispensedtableService) {}

  ngOnInit(): void {}
  print() {
    window.print();
  }
}
