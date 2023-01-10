import { Component, OnInit } from '@angular/core';
import { TogglemainService } from 'src/app/services/togglemain.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public data: TogglemainService) {}

  ngOnInit(): void {}
}
